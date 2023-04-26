const express = require("express");
const app = express();
const routes = require("./src/routes/router");
require("dotenv").config();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use("/api", routes);

app.use("/", (req, res) => {
  res.send("Welcome to the server...");
});

app.listen(PORT, () => {
  console.log("Server Started on Port:", PORT);
});
