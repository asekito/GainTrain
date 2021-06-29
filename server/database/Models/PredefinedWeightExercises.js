const { sequelize, DataTypes } = require("../dbConnect");

const PredefinedWeightliftExercises = sequelize.define(
  "predefined_weightlift_exercises",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    exercise: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
    image_example: {
      type: DataTypes.STRING,
    },
    main_target_muscle_group: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    complementary_muscle_group: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = {
  PredefinedWeightliftExercises,
};
