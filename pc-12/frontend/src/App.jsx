import React from 'react';
import { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: 'Note 1',
      description: 'Description 1',
    },
    {
      id: 2,
      title: 'Note 2',
      description: 'Description 2',
    },
    {
      id: 3,
      title: 'Note 3',
      description: 'Description 3',
    },
    {
      id: 4,
      title: 'Note 4',
      description: 'Description 4',
    },
  ]);
  axios
    .get('http://localhost:3000/api/notes')
    .then((response) => {
      console.log(response.data.notes)
      setNotes(response.data.notes);
    })
   

  return (
    <div>
      <div className="notes">
        {notes.map((note) => {
          return (
            <div className="note" key={note.id}>
              <h2>{note.title}</h2>
              <p>{note.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
