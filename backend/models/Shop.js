const mongoose = require("mongoose");

const shopSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      //   required: [true, "Please add a category Name"],
    },
    slug: {
      type: String,
      trim: true,
      //   required: true,
      unique: true,
    },
  },

  { timestamps: true }
);

module.exports = mongoose.model("Shop", shopSchema);
