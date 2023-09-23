const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: { type: String },
    shop: { type: mongoose.Schema.Types.ObjectId, ref: "Shop" },
    category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
    language: { type: String },
    description: { type: String },
    attributes: [
      { type: mongoose.Schema.Types.ObjectId, ref: "ProductAttribute" },
    ],
  },

  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
