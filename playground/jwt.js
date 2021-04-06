const jwt = require("jsonwebtoken");
const token = jwt.sign({ foo: "bar" }, "1a2b3c4d5e");
