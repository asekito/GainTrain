const { Op } = require("./dbConnect");
const { User } = require("./Models/User");
const { Exercise } = require("./Models/Exercise");
const {
  PredefinedWeightliftExercises,
} = require("./Models/PredefinedWeightExercises");

module.exports = {
  Op,
  User,
  Exercise,
  PredefinedWeightliftExercises,
};
