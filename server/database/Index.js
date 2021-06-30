const { Op } = require("./dbConnect");
const { User } = require("./Models/User");
const { Program } = require("./Models/Program");
const { Exercise } = require("./Models/Exercise");
const {
  PredefinedWeightliftExercises,
} = require("./Models/PredefinedWeightExercises");

module.exports = {
  Op,
  Program,
  Exercise,
  PredefinedWeightliftExercises,
  User,
};
