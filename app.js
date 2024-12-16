const express = require("express");
const app = express();
const mongoose = require("mongoose");
const ejsLayouts = require('express-ejs-layouts');
const path = require('path');

const MONGO_URL = "mongodb://127.0.0.1:27017/codezone";

main().then(() => {
    console.log("Connection Successful");
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect(MONGO_URL);
}

// Specify the views folder
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.send("You are at the wrong page, please go to the main directory !!");
});

app.get("/home", (req, res) => {
    res.render("lists/index.ejs")
})

app.listen(8080, () => {
    console.log("Server is listening to port 8080");
});