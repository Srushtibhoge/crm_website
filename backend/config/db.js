const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    console.log("process.env.MONGO_URL:", process.env.MONGO_URL);

    await mongoose.connect(process.env.MONGO_URL);

    console.log("Database Connected");
  } catch (error) {
    console.error("DB Error:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;