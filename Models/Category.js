const mongoose = require("mongoose");

/**
 * CategorySchema
 */
const CategorySchema = new mongoose.Schema(
  {
    categoryName: {
      type: String,
    },
  },
  { timeseries: true }
);

const Category = new mongoose.model("Category", CategorySchema);

module.exports = Category;
