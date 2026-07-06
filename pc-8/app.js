// console.log("Hello world from Node.js")

// for(let i = 0; i<5; i++){
//     console.log(i)
// }

// const catMe = require("cat-me");

// console.log(catMe());



const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(3000, () => {
    console.log('Example app listening on port 3000!')
})
