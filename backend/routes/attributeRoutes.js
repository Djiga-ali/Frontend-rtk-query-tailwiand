const express = require("express");
const {
  createNewProductAttribute,
  getProductAttributes,
} = require("../controllers/attributeController");
const router = express.Router();

router.post("/create", createNewProductAttribute);
router.get("/get-attributes", getProductAttributes);
module.exports = router;
