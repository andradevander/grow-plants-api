const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const userRoutes = require("./routes/user");
const authRoutes = require("./routes/auth");
const plantRoutes = require("./routes/plants");

const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.use("/auth", authRoutes);
app.use("/user", userRoutes);
app.use("/plant", plantRoutes);

app.use(function (_req, res, _next) {
  res.status(404).send("Sorry can't find that!");
});

app.use(function (err, _req, res, _next) {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
