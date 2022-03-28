// const mongoose = require('mongoose');
const express = require("express");
// const port = 3000

const app = express();
// const db = 'mongodb+srv://Pushks18:Pushks18@cluster0.rtqhp.mongodb.net/Zomato?retryWrites=true&w=majority'
// mongoose.connect(DB).then()
//Database config
// require("./config/mongodb.config")

app.get("/", (req, res) => {
    res.send('Hello World')
});



// app.get("/menu", (req, res) => {
//     res.send('menupage.html')
// });

app.get('/menupage', function (req, res) {
    res.sendFile('/menupage.html', { root: __dirname })
});

app.get('/index', function (req, res) {
    res.sendFile('/index.html', { root: __dirname })
});


app.listen(3000, () => {
    console.log("Server running on 3000");
})
