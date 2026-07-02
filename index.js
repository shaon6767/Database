const dns = require("dns");
dns.setServers(["8.8.8.8", "1.1.1.1"]);
const express = require("express");
const mongoose = require("mongoose");
const app = express();

mongoose
  .connect(
    "mongodb+srv://shawon:RYk0Lk5uROTU5x8o@cluster0.adqucwq.mongodb.net/practice?appName=Cluster0",
  )
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.error("MongoDB connection failed:", err.message);
    process.exit(1);
  });

app.post("/todos", async (req, res) => {
  try {
    const todo = await Todo.create({ title: req.body.title });
    res.status(201).json(todo);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
