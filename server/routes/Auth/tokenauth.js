const { app, jwt } = require("../../server");

app.post("/api/token-check", async (req, res) => {
  try {
    const { token } = req.body;
    if (!token) {
      return res.status(200).send({ auth: false });
    }

    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    return res.status(200).send({ auth: true, uid: decodedToken.user });
  } catch (err) {
    console.log(err);
    return res.status(400).send({ auth: false, error: err });
  }
});
