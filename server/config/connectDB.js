// Load env variabless
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

// Import depends
const mongoose = require("mongoose");

// Connect to database
const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("connected to database");
  } catch (err) {
    console.log(err);
  }
};

// Connect DB function exported via 'module.exports'
module.exports = connectToDatabase;
