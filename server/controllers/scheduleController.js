import asyncHandler from "express-async-handler";
import schedule from "../utils/schedule";

// @desc    Auth user/set token
// @route   POST /api/users/login
// @access  Public

const getSchedule = asyncHandler(async (req, res) => {
  return schedule;
});

module.exports = { getSchedule };
