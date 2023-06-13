const express = require("express");
const router = express.Router();
const UserController = require("../Controllers/UserController");
const CategoryController = require("../Controllers/CategoryController");
const PostController = require("../Controllers/PostController");
const ProfileController = require("../Controllers/ProfileController");
const ForgetPasswordController = require("../Controllers/ForgetPasswordController");
const multer = require("multer");

/**-------------------- File Upload Start --------------------**/
let storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "public/upload");
  },
  filename(req, file, cb) {
    let dateTime = Date.now();
    cb(null, dateTime + "_" + file.originalname);
  },
});
let upload = multer({ storage });
/**-------------------- File Upload End --------------------**/

/**
 * User Routes
 */
router.post("/userCreate", UserController.userCreate);
router.post("/userUpdate/:id", UserController.userUpdate);
router.get("/getUserById/:id", UserController.getUserById);
router.get("/getAllUsers/", UserController.getAllUsers);
router.get("/userDelete/:id", UserController.userDelete);
router.post("/updateUserProfile/:id", upload.single("image"));
/**
 * Category Routes
 */
router.post("/createCategory", CategoryController.createCategory);
router.get("/getAllCategories", CategoryController.getAllCategories);
router.post("/updateCategory", CategoryController.updateCategory);
router.post("/deleteCategory", CategoryController.deleteCategory);

/**
 * Post Routes
 */
router.post("/createPost", upload.single("image"), PostController.createPost);
router.post(
  "/updatePost/:id",
  upload.single("image"),
  PostController.updatePost
);

/**
 * Send Mail and Reset Password Routes
 */
router.post("/resetLink", ForgetPasswordController.resetLink);
router.post("/forgetPassword", ForgetPasswordController.forgetPassword);

/**
 * Export router
 */
module.exports = router;
