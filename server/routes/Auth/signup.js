const { app, bcrypt, Op } = require("../../server");
const { User } = require("../../database/Index");

app.post("/api/sign-up", async (req, res) => {
  try {
    const { username, password, firstname, lastname, email } = req.body;

    if (!username || !password || !firstname || !lastname || !email) {
      throw new Error(
        "One or more account creation fields were not properly filled out."
      );
    }

    if (
      typeof username !== "string" ||
      typeof password !== "string" ||
      typeof firstname !== "string" ||
      typeof lastname !== "string" ||
      typeof email !== "string" ||
      email.indexOf("@") === -1
    ) {
      throw new Error("Type error for one or more fields.");
    }

    const user = await User.findOne({
      where: { [Op.or]: [{ username: username }, { email: email }] },
    });

    if (user) {
      return res.status(200).send({
        success: false,
        msg: "User already exists with email or username",
      });
    }

    const hashedPassword = bcrypt.hashSync(password, 8);

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

    // await transaction.commit();
    return res.status(200).send({ success: true, msg: "" });
  } catch (err) {
    console.log(err);
    return res.status(401).send({ error: err });
  }
});
