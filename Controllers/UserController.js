const User = require("../Models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

/**
 * userCreate Function
 */
const userCreate = async (req, res) => {
  try {
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(req.body.password, salt);
    const newUser = await User.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      password: hashPassword,
      role: req.body.role,
      profile: req.body.profile,
    });
    const token = await generateToken(newUser._d);
    res.status(201).json({
      message: "User Create Successfully",
      token,
      newUser,
    });
  } catch (error) {
    res.status(401).json({
      error: error.message,
    });
  }
};

/**
 * userUpdate
 */
const userUpdate = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      password: req.body.password,
      role: req.body.role,
      profile: process.env.PROFILE_AVATAR,
    });
    res.status(201).json({
      message: "User Update Successfully",
    });
  } catch (error) {
    res.status(401).json({
      error: error.message,
    });
  }
};

/**
 * getUserById
 */
const getUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const findUser = await User.findById(id);
    res.status(201).json({
      findUser,
    });
  } catch (error) {
    res.json({
      error: error.message,
    });
  }
};
/**
 * getAllUsers
 */
const getAllUsers = async (req, res) => {
  try {
    const allUsers = await User.find({});
    res.status(201).json(allUsers);
  } catch (error) {
    res.status(400).json({
      error,
    });
  }
};

/**
 * userDelete
 */
const userDelete = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findByIdAndDelete(id);
    if (user == null) {
      res.status(201).json({
        message: "User Not Exist",
      });
    } else {
      res.status(201).json({
        message: "User Delete Successfully",
        user,
      });
    }
  } catch (error) {
    res.json(error);
  }
};

/**
 * generateToken
 */
const generateToken = async (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};
/**
 * Exoprt All User Controllers
 */
module.exports = {
  userCreate,
  userUpdate,
  getUserById,
  getAllUsers,
  userDelete,
};

/**
 * SOLID Principle
 * 1) index
 * 2) store
 * 3) edit(id) => Fetch Data from database
 * 4) update(id, data) => Restore data on specfic id
 * 5) destroy
 */
