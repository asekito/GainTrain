const { Op } = require("./dbConnect");
const { User } = require("./Models/User");
const { Program } = require("./Models/Program");
const { Exercise } = require("./Models/Exercise");
const { PredefinedExercise } = require("./Models/PredefinedExercise");

module.exports = {
  Op,
  Program,
  Exercise,
  PredefinedExercise,
  User,
};
