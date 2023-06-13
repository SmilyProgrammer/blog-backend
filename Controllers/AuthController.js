const User = require("../Models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
/**
 * login
 */
const login = async (req, res) => {
  let user = User.findOne({ email: req.body.email });
  if (user != null) {
    const isValid = await bcrypt.compare(user.password, req.body.password);
    if (isValid) {
      const token = await create_jwt_token(isValid._id);
      res.json({
        success: true,
        isValid,
        token,
      });
    } else {
      res.json({
        success: false,
        message: "Invalid Password!",
      });
    }
  } else {
    res.json({
      success: false,
      message: "Invalid Email!",
    });
  }
};

const create_jwt_token = async (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};
/**
 * Export AuthControllers
 */
module.exports = login;
