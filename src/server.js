const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const cors = require("cors");
const userRoutes = require("./routes/user");
const authRoutes = require("./routes/auth");
const plantRoutes = require("./routes/plant");
const dbRoutes = require("./routes/db");

const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "*");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});

app.use("/auth", authRoutes);
app.use("/user", userRoutes);
app.use("/plant", plantRoutes);
app.use("/db", dbRoutes);

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
