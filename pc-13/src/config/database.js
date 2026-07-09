const mongoose = require("mongoose");

function connectDB(){
    mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("Database connected");
    }).catch((error)=>{
        console.log(error);
    })
}

module.exports = connectDB;
