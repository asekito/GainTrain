const { sequelize, DataTypes } = require("../dbConnect");
const { User } = require("./User");
const { Exercise } = require("./Exercise");

const Program = sequelize.define(
  "programs",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: "id",
      },
    },
    program_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  { timestamps: false }
);

Program.hasMany(Exercise, { foreignKey: "program_id" });
Exercise.belongsTo(Program, { foreignKey: "program_id" });

module.exports = {
  Program,
};
