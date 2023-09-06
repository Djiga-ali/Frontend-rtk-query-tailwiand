const express = require("express");
const { createNewShop, getShops } = require("../controllers/shopController");
const router = express.Router();

router.post("/create", createNewShop);
router.get("/get-shops", getShops);
module.exports = router;
