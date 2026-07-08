const express = require('express');
const noteModel = require('./models/note.model.js');
const cors = require("cors")




const app = express();
app.use(express.json());
app.use(cors());


/**
 * POST /api/notes
 * - create new note and save in mongoDB
 */

app.post('/api/notes', async (req, res) => {
  const { title, description } = req.body;

  const note = await noteModel.create({ title, description });

  res.status(201).json({
    message: 'Note created successfully!!!!',
    note,
  });
});

/**
 * GET /api/notes
 * - get all notes from mongoDB
 */

app.get('/api/notes', async (req, res) => {
  const notes = await noteModel.find();
  res.status(200).json({
    message: 'Notes fetched successfully',
    notes,
  });
});

/**
 * DELETE /api/notes/:id
 * - delete note from mongoDB
 */

app.delete('/api/notes/:id', async (req, res) => {
  const id = req.params.id;
  await noteModel.findByIdAndDelete(id);
  res.status(200).json({
    message: 'Note deleted successfully',
  });
});

/*
 * - PATCH /api/notes/:id
 * - update the description of the notes
 * - req.body = {description}
 */

app.patch('/api/notes/:id', async (req, res) => {
  const id = req.params.id;
  const { description } = req.body;
  await noteModel.findByIdAndUpdate(id, { description });
  res.status(200).json({
    message: 'Note updated successfully',
  });
});

module.exports = app;


