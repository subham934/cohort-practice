// console.log("Hello world from Node.js")

// for(let i = 0; i<5; i++){
//     console.log(i)
// }

// const catMe = require("cat-me");

// console.log(catMe());

const express = require('express');
const app = express();

const catMe = require('cat-me');

app.get('/', (req, res) => {
  res.send('Hello World, Server is Working!!');
});

app.get('/about', (req, res) => {
  res.send('This is about Page');
});

app.get('/contact', (req, res) => {
  res.send('This is contact Page');
});

app.get('/cat', (req, res) => {
  res.send(catMe());
});

app.listen(3000, () => {
  console.log('Server is running on port 3000!');
});
