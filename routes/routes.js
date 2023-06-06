const express = require("express");
const router = express.Router();
const UserController = require("../Controllers/UserController");

router.post("/userCreate", UserController.userCreate);
router.post("/userUpdate/:id", UserController.userUpdate);
router.get("/getUserById/:id", UserController.getUserById);
router.get("/getAllUsers/", UserController.getAllUsers);
router.get("/userDelete/:id", UserController.userDelete);

module.exports = router;
