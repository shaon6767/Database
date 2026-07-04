require("dotenv").config();

const express = require("express");
const path = require("path");
const connectDB = require("./config/db");
const todoRoutes = require("./routes/todoRoutes");
const errorHandler = require("./middleware/errorHandler");

const app = express();

connectDB();

app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

app.use("/api/todos", todoRoutes);

app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
