const express = require('express');

const app = express();

app.use(express.json())

const notes = []


// do it with postman

app.post("/notes", (req, res)=>{
    // console.log(req.body);

    notes.push(req.body);
    console.log(notes);

    res.send("Note created successfully");
})

app.get("/notes", (req, res) => {
  res.json(notes);
});


app.delete("/notes/:index", (req, res) => {
    console.log(req.params);
    console.log(req.params.index);
    
    delete notes[req.params.index];
    res.send("Note deleted successfully");
})


app.patch("/notes/:index", (req, res) => {  
    notes[req.params.index].description = req.body.description;
    res.send("Note updated successfully");
})


module.exports = app;