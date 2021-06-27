const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { Op } = require("./database/Index");
require("dotenv").config();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});

module.exports = {
  app,
  jwt,
  bcrypt,
  Op,
};

// -----------------
// AUTH ROUTES
// -----------------
require("./routes/Auth/login");
require("./routes/Auth/signup");
require("./routes/Auth/tokenauth");

// -----------------
// PROGRAM ROUTES
// -----------------
require("./routes/Program/add-program");
require("./routes/Program/get-programs");
