const { app, jwt } = require("../../server");
const { PredefinedWeightliftExercises } = require("../../database/Index");

app.get("/api/predefined-weightlift-exercises", async (req, res) => {
  try {
    const { token } = req.headers;

    if (!token) throw new Error("No valid token.");

    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    if (!decodedToken.user) {
      throw new Error("No valid user on token.");
    }

    const predefExercises = await PredefinedWeightliftExercises.findAll({
      order: ["exercise"],
    });

    console.log(predefExercises);
    res.status(200).send({ success: true, msg: "", data: predefExercises });
  } catch (err) {
    console.error(err);
    res.status(400).send({ success: false, error: err });
  }
});
