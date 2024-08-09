// Load env variables
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

// Import depends
const express = require("express");
const cors = require("cors");
const connectToDatabase = require("./config/connectDB");
const notesController = require("./controllers/notesController");

// Create express app
const app = express();

// Configure express app - needed to read json off request body
app.use(express.json());
app.use(cors());

// Connect to database
connectToDatabase();

// Routing
app.get("/notes", notesController.fetchNotes);
app.get("/notes/:id", notesController.fetchNote);
app.post("/notes", notesController.createNote);
app.put("/notes/:id", notesController.updateNote);
app.delete("/notes/:id", notesController.deleteNote);

//start the server
app.listen(process.env.PORT);
