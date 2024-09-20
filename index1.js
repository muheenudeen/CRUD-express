const express = require('express');
const app = express();
const port = 3001;
const note = require("./scheme");
const mongoose = require('mongoose');

app.use(express.json());

app.get('/about', async (req, res) => {
  try {
    const notes = await note.find({});
    res.status(202).json(notes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});




app.post('/about', async (req, res) => {
  try {
    const newNote = new note(req.body);
    await newNote.save();
    res.status(201).json(newNote);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});




app.patch('/about/:id', async (req, res) => {
    const { id } = req.params;
    try {
      const patchNote = await note.findByIdAndUpdate(id, { $set: req.body }, { new: true, runValidators: true });
      if (!patchNote) {
        return res.status(404).json({ error: "not founded" });
      }
      res.status(200).json(patchNote);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });




app.put('/about/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const updatedNote = await note.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
    if (!updatedNote) {
      return res.status(404).json({ error: "Note not found" });
    }
    res.status(200).json(updatedNote);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});




app.delete('/about/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const deletedNote = await note.findByIdAndDelete(id);
    if (!deletedNote) {
      return res.status(404).json({ error: "Note not found" });
    }
    res.status(200).json({ message:"Note deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message});
  }
});

app.listen(port, () =>{
  console.log(`running`);
});

main().then(() => console.log("connected")).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://muheenudeen313:N4tfumxN5UR5Q5Ur@cluster0.sygci.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
}
