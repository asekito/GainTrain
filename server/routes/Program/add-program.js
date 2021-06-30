const { app, bcrypt, Op, jwt } = require("../../server");
const { Exercise, User, Program } = require("../../database/Index");

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

    const newProgram = await Program.create({
      user_id: user.id,
      program_date: programDate,
    });

    if (!newProgram) {
      throw new Error("Program was unable to be created.");
    }

    console.log(program);
    program.forEach((p) => {
      Exercise.create({
        program_id: newProgram.id,
        exercise_id: p.exercise,
        sets: p.sets,
        reps: p.reps,
        weight: p.weight,
        weightUnit: p.weightUnit,
        time: p.time,
        distance: p.distance,
        distanceUnit: p.distanceUnit,
        type: p.type,
      });
    });

    res.status(201).send({ success: true, msg: "" });
  } catch (err) {
    console.log(err);
    return res.status(400).send({ success: false, error: err });
  }
});
