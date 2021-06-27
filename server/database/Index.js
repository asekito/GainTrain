const { Op } = require("./dbConnect");
const { User } = require("./Models/User");
const { Exercise } = require("./Models/Exercise");

module.exports = {
  Op,
  User,
  Exercise,
};
