const User = require("../Models/User");

/**
 * updateUserProfile
 */
const updateUserProfile = async (req, res) => {
  try {
    await User.findByIdAndUpdate(req.params.id, {
      profile: "upload/" + req.file.filename,
    });
    res.status(201).json({
      success: true,
      message: "User profile updated successfully",
    });
  } catch (error) {
    res.json({
      errorName: error.name,
      errorMessage: error.message,
    });
  }
};

/**
 * Export updateUserProfile
 */
module.exports = updateUserProfile;
