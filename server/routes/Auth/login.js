const { app, bcrypt, jwt, Op } = require("../../server");
const { User } = require("../../database/Index");

app.post("/api/login", async (req, res) => {
  try {
    const { login, password } = req.body;

    if (!login || !password) {
      throw new Error("One or more fields have incorrect inputs.");
    }

    const user = await User.findOne({
      where: { [Op.or]: [{ username: login }, { email: login }] },
    });

    if (!user) {
      throw new Error("Incorrect username or email.");
    }

    const validPass = bcrypt.compareSync(password, user.password);

    if (!validPass) {
      throw new Error("Incorrect password.");
    }

    const accessToken = jwt.sign(
      { user: user.id },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "2h" } // expires in 6 hours
    );

    return res.status(200).send({ auth: true, token: accessToken });
  } catch (err) {
    console.log(err);
    return res.status(401).send({ auth: false, error: err });
  }
});
