const { app, bcrypt, Op, jwt } = require("../../server");
const { Exercise, User } = require("../../database/Index");

app.post("/api/add-exercise", async (req, res) => {
  try {
    const { program, programDate, token } = req.body;
    if (!token) throw new Error("No valid session.");

    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    if (!decodedToken.user) {
      throw new Error("No valid user.");
    }

    const user = await User.findOne({
      where: { id: decodedToken.user },
    });

    if (!user) {
      throw new Error("No valid user found.");
    }

    const addedExercise = await Exercise.create({
      user_id: user.dataValues.id,
      exercises: program,
      program_date: programDate,
    });

    res.status(201).send({ success: true, msg: "" });
  } catch (err) {
    console.log(err);
    return res.status(400).send({ success: false, error: err });
  }
});
