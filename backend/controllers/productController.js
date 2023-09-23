const ProductAttribute = require("../models/ProductAttributes");
const Product = require("../models/Product");
const slugify = require("slugify");

exports.createNewProduct = async (req, res) => {
  const { name, shop, language, description, attributes, category } = req.body;

  if (!name || !shop || !language || !description || !attributes || !category) {
    res.status(400).json({ message: "All fields are required" });
  }

  const product = await Product.create({
    name,
    shop,
    language,
    description,
    attributes,
    category,
  });

  if (product) {
    //created
    res.status(201).json({
      message: `New ProductAttribute ${product.name} created`,
    });
  } else {
    res.status(400).json({ message: "There is an error" });
  }
};

// find all caterories
exports.getProducts = async (req, res) => {
  const products = await Product.find().populate("shop attributes");

  if (products) {
    res.status(200).json(products);
    // res.status(200).json({ categories });
  } else {
    res.status(400).json({ message: "No ProductAttribute found" });
  }
};

// Single ProductAttribute

exports.getSingleProduct = async (req, res) => {
  const { id } = req.params;
  console.log("id:", id);
  const product = await Product.findById({
    _id: id,
  }).populate("shop attributes");

  if (product) {
    res.status(200).json(product);
  } else {
    res.status(400).json({ message: "There is an error" });
  }
};
