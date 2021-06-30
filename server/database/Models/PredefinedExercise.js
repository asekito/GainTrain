const { sequelize, DataTypes } = require("../dbConnect");

const PredefinedExercise = sequelize.define(
  "predefined_exercises",
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
  PredefinedExercise,
};
