const express = require('express');

const app = express();

app.use(express.json());

const notes = [];

app.post('/notes', (req, res) => {
  console.log(req.body);
  notes.push(req.body);
  res.status(201).json({
    message: 'Note created successfully !!',
  });
});

app.get('/notes', function (req, res) {
  res.status(200).json({
    notes: notes,
  });
});

app.delete('/notes/:id', function (req, res) {
  const id = req.params.id;
  notes.splice(id, 1);
  res.status(200).json({
    message: 'Note deleted successfully !!',
  });
});







//use the above function for deleting as it dont create an null value
// app.delete("/notes/:mama",(req, res)=>{
//     delete notes[req.params.mama]
//     res.status(200).json({
//         message:"Note deleted successfully"
//     })
// })


app.patch("/notes/:mama", function(req, res){
    notes[req.params.mama].description = req.body.description;
    res.status(200).json({
        message:"Note updated successfully"
    })
})






module.exports = app;
