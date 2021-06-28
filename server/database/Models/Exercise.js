const { sequelize, DataTypes } = require("../dbConnect");
const { User } = require("./User");

const Exercise = sequelize.define(
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
    exercises: {
      type: DataTypes.STRING,
      allowNull: false,
      get: function () {
        return JSON.parse(this.getDataValue("exercises"));
      },
      set: function (val) {
        return this.setDataValue("exercises", JSON.stringify(val));
      },
    },
    program_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  { timestamps: false }
);

module.exports = {
  Exercise,
};
