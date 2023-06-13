const mongoose = require("mongoose");

/**
 * PostSchema
 */
const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Blog title is required"],
    },
    image: {
      type: String,
      required: [true, "Blog image is required"],
    },
    body: {
      type: String,
      required: [true, "Blog body is Required"],
    },
    auther: {
      type: String,
    },
    category: {
      type: String,
    },
    is_publish: {
      type: Boolean,
      default: false,
    },
    is_approvedByAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Post = new mongoose.model("Post", PostSchema);

module.exports = Post;
