const bcrypt = require("bcrypt");

const authToken = async (req, res, next) => {
  if (req.headers.token) {
    await bcrypt.compare(
      req.headers.token,
      process.env.JWT_SECRET,
      (error, decodedToken) => {
        if (error) {
          res.json({
            error: error.name,
            error: error.message,
          });
        } else {
          req.decodedToken = decodedToken;
          next();
        }
      }
    );
  } else {
    res.status(401).json({
      message: "Enter You Token",
    });
  }
};

/**
 * Export authToken
 */
module.exports = authToken;
