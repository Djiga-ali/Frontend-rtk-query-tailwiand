const mongoose = require("mongoose");

const productAttributeSchema = new mongoose.Schema(
  {
    pictures: [
      {
        public_id: {
          type: String,
          //   required: true,
        },
        url: {
          type: String,
          //   required: true,
        },
      },
    ],
    name: { type: String },
    productColorName: { type: String },
    price: { type: String },
    size: [String],
  },

  { timestamps: true }
);

module.exports = mongoose.model("ProductAttribute", productAttributeSchema);
