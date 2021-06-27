const { app, jwt } = require("../../server");
const { User, Exercise } = require("../../database/Index");

app.get("/api/programs", (req, res) => {
  try {
    const { token } = req.body;

    res.status(200).send({ success: true, msg: "" });
  } catch (err) {
    console.error(err);
    res.status(400).send({ success: false, error: err });
  }
});
