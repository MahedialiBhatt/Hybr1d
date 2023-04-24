const express = require("express");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 3000;

app.use("/",(req,res)=>{
    res.send("Welcome to the server...")
})

app.listen(PORT, () => {
  console.log("Server Started on Port:", PORT);
});
