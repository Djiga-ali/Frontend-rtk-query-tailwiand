const express = require("express");
const {
  createNewProduct,
  getProducts,
  getSingleProduct,
} = require("../controllers/ProductController");
const router = express.Router();

router.post("/create", createNewProduct);
router.get("/get-products", getProducts);
router.get("/product-details/:id", getSingleProduct);
module.exports = router;
