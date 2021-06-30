const { app, jwt } = require("../../server");
const {
  User,
  Program,
  Exercise,
  PredefinedWeightliftExercises,
} = require("../../database/Index");

app.get("/api/programs/", async (req, res) => {
  try {
    const { token } = req.headers;

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
          attributes: ["sets", "reps", "program_id"],
          include: [
            {
              model: PredefinedWeightliftExercises,
              attributes: ["exercise"],
            },
          ],
        },
      ],
    });

    // const userPrograms = await Exercise.findAll({
    //   where: { user_id: decodedToken.user },
    //   order: ["program_date"],
    // });

    res.status(200).send({ success: true, msg: "", data: userPrograms });
  } catch (err) {
    console.error(err);
    res.status(400).send({ success: false, error: err });
  }
});
