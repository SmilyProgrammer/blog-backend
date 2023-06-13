const Post = require("../Models/Post");

/**
 * createPost
 */
const createPost = async (req, res) => {
  try {
    await Post.create({
      title: req.body.title,
      image: "upload/" + req.file.filename,
      body: req.body.body,
      auther: req.body.auther,
      category: req.body.category,
    });
    res.json({
      message: "Post Create Successfully",
    });
  } catch (error) {
    res.json({
      name: error.name,
      message: error.message,
    });
  }
};

/**
 * updatePost
 */
const updatePost = async (req, res) => {
  try {
    let updatedImage = req.body.existigImage;
    console.log(req.file);
    if (updatedImage == "" || updatedImage == null) {
      updatedImage = "upload/" + req.file.filename;
    }
    await Post.findByIdAndUpdate(req.params.id, {
      title: req.body.title,
      image: updatedImage,
      body: req.body.body,
      auther: req.body.auther,
      category: req.body.category,
    });
    res.json({
      success: true,
      message: "Post Update Successfully!",
    });
  } catch (error) {
    res.json({
      name: error.name,
      message: error.message,
    });
  }
};
/**
 * Export Post Controllers
 */
module.exports = {
  createPost,
  updatePost,
};
