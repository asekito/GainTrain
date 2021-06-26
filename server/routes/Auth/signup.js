const { app, bcrypt } = require("../../server");
const { User } = require("../../database/Index");

app.post("/api/sign-up", async (req, res) => {
  try {
    const { username, password, firstname, lastname, email } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 8);
    const user = await User.findOne({ where: { username: username } });

    // const transaction = await sequelize.transaction();
    const newUser = await User.create(
      {
        username: username,
        email: email,
        firstname: firstname,
        lastname: lastname,
        password: hashedPassword,
      }
      // { transaction }
    );
    console.log(newUser);
    // await transaction.commit();
    return res.status(200).send({ response: "yes" });
  } catch (err) {
    return res.status(401).send({ error: err });
  }
});
