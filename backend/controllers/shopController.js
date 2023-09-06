const Shop = require("../models/Shop");
const Product = require("../models/Product");
const slugify = require("slugify");

exports.createNewShop = async (req, res) => {
  const { name } = req.body;

  if (!name) {
    res.status(400).json({ message: "title and value are required" });
  }

  const existShop = await Shop.findOne({ name });
  if (existShop) {
    res.status(400).json({ message: "The Shop title alredy existe" });
  }

  const shop = await Shop.create({
    name,
    slug: slugify(name).toLowerCase(),
  });

  if (shop) {
    //created
    res.status(201).json({ message: `New Shop ${shop.name} created` });
  } else {
    res.status(400).json({ message: "There is an error" });
  }
};

// find all caterories
exports.getShops = async (req, res) => {
  const shops = await Shop.find();

  if (shops) {
    res.status(200).json(shops);
    // res.status(200).json({ categories });
  } else {
    res.status(400).json({ message: "No Shop found" });
  }
};

// Single shop

exports.getSingleShop = async (req, res) => {
  const { ShopSlug } = req.params;
  const Shop = await Shop.findById({ slug: ShopSlug });
  const productsByShop = await Product.find({
    Shop: Shop,
  }).populate({
    path: "Shop shop",
  });

  if (!Shop) {
    //created
    res.status(400).json({ message: "No shop found" });
  } else if (Shop && !productsByShop) {
    res.status(201).json({ message: "No products in this Shop " });
  } else if (Shop && productsByShop) {
    res.status(201).json({ Shop, productsByShop });
  } else {
    res.status(400).json({ message: "There is an error" });
  }
};

// ATTENTION et DEMME POUR DELETE: A eviter parce les produits qui sont déjà dans cette categorie vont être introuvable
exports.updateShop = async (req, res) => {
  const { ShopId } = req.params;
  const { title } = req.body;

  if (!title) {
    res.status(400).json({ message: "Title is required" });
  }

  const Shop = await Shop.findByIdAndUpdate(
    { _id: ShopId },
    { title, slug: slugify(title) }
  );
};
