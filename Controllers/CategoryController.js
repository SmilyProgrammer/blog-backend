const Category = require("../Models/Category");

/**
 * createCategory
 */
const createCategory = async (req, res) => {
  // find if category already exist
  let category = await Category.findOne({
    categoryName: req.body.categoryName,
  });

  if (category == null) {
    await Category.create({
      categoryName: req.body.categoryName.toLowerCase(),
    });
    res.json({
      success: true,
      message: "Category created successfully!",
    });
  } else {
    res.json({
      success: false,
      message: "This category is already exist!",
    });
  }
};

/**
 * getAllCategories
 */
const getAllCategories = async (req, res) => {
  let allCategories = await Category.find({});
  if (allCategories == null) {
    res.json({
      success: false,
      message: "There is no any category in Database",
    });
  } else {
    res.json({
      success: true,
      message: "Categories fateched successfully",
      data: allCategories,
    });
  }
};

/**
 * updateCategory
 */

const updateCategory = async (req, res) => {
  await Category.findByIdAndUpdate(req.params.id, {
    categoryName: req.body.categoryName.toLowerCase(),
  });

  res.json({
    success: true,
    message: "Category update successfully",
  });
};

/**
 * deleteCategory
 */
const deleteCategory = async (req, res) => {
  await Category.findByIdAndDelete(req.params.id);
  res.json({
    success: true,
    message: "Category deleted successfully",
  });
};

/**
 * Export All Controllers
 */
module.exports = {
  createCategory,
  getAllCategories,
  updateCategory,
  deleteCategory,
};
