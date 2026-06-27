require("node:dns").setServers(["1.1.1.1"], ["8.8.8.8"]);
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const secureMiddleWare = require("./middlewares/secureMiddleWare");
const amountController = require("./controllers/amountController");
mongoose
  .connect(
    "mongodb+srv://shawon:i7tPh7KiFc1TgF2Z@cluster0.adqucwq.mongodb.net/todo?appName=Cluster0",
  )
  .then(() => {
    console.log("Database connected successfully");
  });

app.use(express.json());

app.post("/amount", amountController);

app.listen(8000, () => {
  console.log("Server running on port 8000");
}); 
