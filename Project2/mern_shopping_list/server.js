const express = require("express");
const mongoose=require("mongoose");
const bodyParser=require("body-parser");
const items = require("./routes/api/items")
const app=express();

 const db = require("./config/keys").mongooseURI;
//MiddleWare
 app.use(bodyParser.json());

 //Connect to MongoDB
mongoose.connect(db,{useNewUrlParser: true, useUnifiedTopology: true } ).then(console.log("Mongoose DB Connected...")).catch(err => {
    console.log(`Error occured ${err}`)
})

app.use("/api/items", items);
//Connect to Node JS
PORT = process.env.PORT || 5000;

app.listen(PORT,() => console.log(`Server Started on port ${PORT}`));



