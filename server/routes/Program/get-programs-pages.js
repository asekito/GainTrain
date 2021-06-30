const { app, jwt } = require("../../server");
const {
  User,
  Exercise,
  Program,
  PredefinedExercise,
} = require("../../database/Index");

app.get("/api/programs/:page", async (req, res) => {
  try {
    const { token } = req.headers;
    const { page } = req.params;
    const limit = 20;
    const offset = (page - 1) * limit;

    if (!token) throw new Error("No valid token.");

    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    if (!decodedToken.user) {
      throw new Error("No valid user on token.");
    }

    const userPrograms = await Program.findAll({
      attributes: ["id", "user_id", "program_date"],
      include: [
        {
          model: Exercise,
          attributes: [
            "sets",
            "reps",
            "program_id",
            "weight",
            "weightUnit",
            "time",
            "distance",
            "distanceUnit",
            "type",
          ],
          include: [{ model: PredefinedExercise, attributes: ["exercise"] }],
        },
      ],
      where: { user_id: decodedToken.user },
      limit,
      offset,
      order: ["program_date"],
    });

    res.status(200).send({ success: true, msg: "", data: userPrograms });
  } catch (err) {
    console.error(err);
    res.status(400).send({ success: false, error: err });
  }
});
