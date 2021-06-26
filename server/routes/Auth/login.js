const { app } = require("../../server");

app.post("/api/login", (req, res) => {
  try {
    console.log(req.body);
    return res.status(200).send({ response: "yes" });
  } catch (err) {
    return res.status(401).send({ error: err });
  }
});
