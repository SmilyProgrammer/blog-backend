const User = require("../Models/User");

/**
 * userCreate Function
 */
const userCreate = async (req, res) => {
  try {
    await User.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      password: req.body.password,
      role: req.body.role,
      profile: req.body.profile,
    });
    res.status(201).json({
      message: "User Create Successfully",
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
      profile: req.body.profile,
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
module.exports = {
  userCreate,
  userUpdate,
  getUserById,
  getAllUsers,
  userDelete,
};
