const CategoryModel = require("../models/category");

// fetch all categories
exports.getCategories = async (req, res) => {
  try {
    const data = await CategoryModel.find({});
    return res.status(200).send({
      status: "success",
      data,
    });
  } catch (error) {
    return res.status(500).send({
      status: "error",
      data: {},
      error,
    });
  }
};

// create category

exports.addCategory = async (req, res) => {
  try {
    const { title } = req.body;
    if (!title) {
      return res.status(400).send({
        status: "error",
        data: {},
        error: "title is missing",
      });
    }
    const category = new CategoryModel({
      title,
    });
    const data = await category.save();
    return res.status(201).send({
      status: "success",
      data,
    });
  } catch (error) {
    return res.status(500).send({
      status: "error",
      data: {},
      error,
    });
  }
};
