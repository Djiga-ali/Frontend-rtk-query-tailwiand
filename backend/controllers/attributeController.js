const ProductAttribute = require("../models/ProductAttributes");
const Product = require("../models/Product");
const slugify = require("slugify");
const cloudinary = require("../config/cloudinary");

exports.createNewProductAttribute = async (req, res) => {
  const { name, productColorName, price, size, images: pictures } = req.body;

  if (!name || !productColorName || !price || !size) {
    res.status(400).json({ message: "All fields are required" });
  }

  let images = [...req.body.images];

  let imagesBuffer = [];

  for (let i = 0; i < images.length; i++) {
    const result = await cloudinary.uploader.upload(images[i], {
      folder: "images/attributes",
      width: 1920,
      crop: "scale",
    });

    imagesBuffer.push({
      public_id: result.public_id,
      url: result.secure_url,
    });
  }
  //   if (imagesBuffer.length > 1) {
  //     res.status(400).json({ message: "more than 1 images" });
  //   }

  req.body.images = imagesBuffer;

  const productAttr = await ProductAttribute.create({
    name,
    productColorName,
    price,
    size,
    pictures: imagesBuffer,
  });

  if (productAttr) {
    //created
    res.status(201).json({
      message: `New ProductAttribute ${productAttr.name} created`,
    });
  } else {
    res.status(400).json({ message: "There is an error" });
  }
};

// find all caterories
exports.getProductAttributes = async (req, res) => {
  const productAttributes = await ProductAttribute.find();

  if (productAttributes) {
    res.status(200).json(productAttributes);
    // res.status(200).json({ categories });
  } else {
    res.status(400).json({ message: "No ProductAttribute found" });
  }
};

// Single ProductAttribute

exports.getSingleProductAttribute = async (req, res) => {
  const { productId } = req.params;
  const productAttribute = await ProductAttribute.findById({
    _id: productId,
  });

  if (!productAttribute) {
    res.status(200).json(productAttribute);
  } else {
    res.status(400).json({ message: "There is an error" });
  }
};

// ATTENTION et DEMME POUR DELETE: A eviter parce les produits qui sont déjà dans cette categorie vont être introuvable
exports.updateProductAttribute = async (req, res) => {
  const { ProductAttributeId } = req.params;
  const { title } = req.body;

  if (!title) {
    res.status(400).json({ message: "Title is required" });
  }

  const ProductAttribute = await ProductAttribute.findByIdAndUpdate(
    { _id: ProductAttributeId },
    { title, slug: slugify(title) }
  );
};
