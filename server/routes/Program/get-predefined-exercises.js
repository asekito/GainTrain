const { app, jwt } = require("../../server");
const { PredefinedExercise, Op } = require("../../database/Index");

app.get("/api/predefined-exercises", async (req, res) => {
  try {
    const { token } = req.headers;
    if (!token) throw new Error("No valid token.");

    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    if (!decodedToken.user) {
      throw new Error("No valid user on token.");
    }

    const predefWeightExercises = await PredefinedExercise.findAll({
      where: {
        main_target_muscle_group: {
          [Op.not]: 0,
        },
      },
      order: ["exercise"],
    });

    const predefCardioExercises = await PredefinedExercise.findAll({
      where: {
        main_target_muscle_group: 0,
      },
      order: ["exercise"],
    });

    res.status(200).send({
      success: true,
      msg: "",
      data: {
        weightExercises: predefWeightExercises,
        cardioExercises: predefCardioExercises,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(400).send({ success: false, error: err });
  }
});
