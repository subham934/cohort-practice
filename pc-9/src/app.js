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



// 1. req.body

// req.body ka use tab hota hai jab client (frontend, Postman, mobile app, etc.) request ke body ke andar data bhejta hai. Ye data generally POST, PUT, ya PATCH requests mein bheja jata hai, jaise kisi user ka registration form, login credentials, ya naya note create karna. Jab tum app.use(express.json()) middleware use karte ho, Express incoming JSON data ko parse karke ek JavaScript object bana deta hai aur usse req.body mein store kar deta hai. Phir backend us data ko read karke database mein save kar sakta hai, validate kar sakta hai, ya kisi aur operation ke liye use kar sakta hai.



// 2. req.params

// req.params ka use URL ke dynamic path values ko read karne ke liye hota hai. Route define karte waqt hum : (colon) ke saath parameter ka naam likhte hain, jaise /notes/:index ya /users/:id. Jab client request bhejta hai, Express URL ke us dynamic part ki value nikal kar req.params object mein store kar deta hai. Iska use kisi specific resource ko identify karne ke liye hota hai, jaise kisi particular user ko fetch karna (/users/25), kisi specific note ko delete karna (/notes/3), ya kisi product ki details dekhna (/products/101). Yahan data request body se nahi, balki URL ke path se aata hai.

// 3. req.query

// req.query ka use URL mein ? ke baad bheje gaye query parameters ko access karne ke liye hota hai. Query parameters optional information bhejne ke liye use hote hain aur zyadatar filtering, searching, sorting, ya pagination ke liye kaam aate hain. Maan lo request hai /notes?page=2&limit=10&search=react, to Express automatically page, limit, aur search ki values req.query object mein store kar deta hai. Query parameters URL ka part hote hain, lekin ye route ko change nahi karte; ye sirf backend ko extra instructions dete hain ki data kis tarah return karna hai.