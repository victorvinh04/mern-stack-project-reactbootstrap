require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = async (req, res, next) => {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongDB connection SUCCESS");
  } catch (error) {
    console.error("MongDB connection FAIL");
    process.exit(1);
  }
};

module.exports = connectDB;
