const express = require("express");
const router = express.Router();
const categoryController = require('../controller/category')

// routes for category
router.get("/", categoryController.getCategories);
router.post("/", categoryController.addCategory);

module.exports = router;