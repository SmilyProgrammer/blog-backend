const express = require("express");
const router = express.Router();
const UserController = require("../Controllers/UserController");
const CategoryController = require("../Controllers/CategoryController");

/**
 * User Routes
 */
router.post("/userCreate", UserController.userCreate);
router.post("/userUpdate/:id", UserController.userUpdate);
router.get("/getUserById/:id", UserController.getUserById);
router.get("/getAllUsers/", UserController.getAllUsers);
router.get("/userDelete/:id", UserController.userDelete);

/**
 * Category Routes
 */
router.post("/createCategory", CategoryController.createCategory);
router.get("/getAllCategories", CategoryController.getAllCategories);
router.post("/updateCategory", CategoryController.updateCategory);
router.post("/deleteCategory", CategoryController.deleteCategory);
module.exports = router;
