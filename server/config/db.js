dns.setServers(["8.8.8.8", "1.1.1.1"]);
const dns = require("dns");
const mongoose = require("mongoose");
const MONGO_URI =
  "mongodb+srv://shawon:RYk0Lk5uROTU5x8o@cluster0.adqucwq.mongodb.net/practice?appName=Cluster0";

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("MongoDB connected");
  } catch (err) {
    console.error("MongoDB connection failed:", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
