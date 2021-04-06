const express = require("express");
const app = express();
const port = 3000;
const routes = require("./routes");
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.use("/", routes);
app.use("*", (_req, res) => {
  return res.status(404);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
