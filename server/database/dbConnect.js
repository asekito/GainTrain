const { Sequelize, Model, DataTypes } = require("sequelize");
const { Op } = Sequelize;
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: "localhost",
    dialect: "mysql",
    port: process.env.DB_PORT,
    logging: true,
  }
);

module.exports = {
  sequelize,
  DataTypes,
  Op,
};
