const Note = require("../models/note");

const fetchNotes = async (req, res) => {
  // Find the notes
  const notes = await Note.find();
  // Respond with the notes
  res.json({ notes });
};

const fetchNote = async (req, res) => {
  // Get ID from url
  const noteId = req.params.id;
  // Find note using that ID
  const note = await Note.findById(noteId);
  // Respond with the note
  res.json({ note });
};

const createNote = async (req, res) => {
  //get sent in data from request body
  const { title, body } = req.body;

  //if title or body is empty, the note will not be created
  if (!title || !body) {
    return res
      .status(400)
      .json({ error: "Title and body are required fields." });
  }

  //create a note with it
  const note = await Note.create({
    title,
    body,
  });

  //respond with a new note
  res.json({ note });
};

const updateNote = async (req, res) => {
  // Get the ID off the url
  const noteId = req.params.id;

  // Get the data off the request body
  const { title, body } = req.body;

  // Find and update the record
  await Note.findByIdAndUpdate(noteId, {
    title,
    body,
  });
  // Find updated note
  const note = await Note.findById(noteId);

  //Respond with it
  res.json({ note });
};

const deleteNote = async (req, res) => {
  // Get the ID off the url
  const noteId = req.params.id;
  // Find and delete the record
  await Note.deleteOne({ _id: noteId });
  // Respond
  res.json({ success: "Record deleted" });
};

module.exports = {
  fetchNotes,
  fetchNote,
  createNote,
  updateNote,
  deleteNote,
};
