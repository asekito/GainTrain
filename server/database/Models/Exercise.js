const { sequelize, DataTypes } = require("../dbConnect");
const { User } = require("./User");
const { Program } = require("./Program");
const { PredefinedExercise } = require("./PredefinedExercise");

const Exercise = sequelize.define(
  "program_exercises",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    program_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Program,
        key: "id",
      },
    },
    exercise_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: PredefinedExercise,
        key: "id",
      },
    },
    sets: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    reps: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    weight: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    weightUnit: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    time: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    distance: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    distanceUnit: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { timestamps: false }
);

PredefinedExercise.hasMany(Exercise, { foreignKey: "exercise_id" });
Exercise.belongsTo(PredefinedExercise, {
  foreignKey: "exercise_id",
});

module.exports = {
  Exercise,
};
