const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const connection = require("./db/connection");
require("dotenv").config();

const userRoute = require("./routes/user.routes");

const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello!");
});

app.use("/user", userRoute);


connection();

app.listen(process.env.PORT || 8082, () => {
  console.log("Listening on port " + process.env.PORT);
});
