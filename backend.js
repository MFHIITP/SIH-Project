const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');
const fs = require("fs");

app.use(express.urlencoded());
app.set("/SIH_Project");
app.set('view engine', 'html');

app.get("/", (req, res)=>{
    res.status(200).sendFile(__dirname + '/Frontend.html');
});
app.listen(port, (req,res)=>{
    console.log(`http://127.0.0.1:${port}`);
});

const mongoose = require("mongoose");
const server = "hossainfarshid:JUITfh-891@clusterfarshid.vcl5snh.mongodb.net";
const database = "SIH_Project";

const connect = async()=>{
    try{
        await mongoose.connect(`mongodb+srv://${server}/${database}`);
        console.log("Connection Successful");
    }
    catch(err){
        console.log("Connection is NOT successful");
    }
}
connect();

var Schema = new mongoose.Schema({
    name: String,
    email: String,
    address: String,
    phone: Number,
    Image_File_Uploaded: Object,
    Image_File_URL: String
});

var Collection1 = mongoose.model("Collection 1", Schema);

app.post("/", (req,res)=>{
    var input = new Collection1(req.body);
    input.save().then(()=>{
        res.status(200).sendFile(__dirname + "/Frontend.html");
    }).catch(()=>{
        res.send("The Data has NOT been saved");
    });
});


