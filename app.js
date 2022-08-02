const express = require("express");

const app = express();

app.set("view engine", "ejs");

app.use(express.static("./src/public"));

app.listen(4000, () => {
    console.log("app listen on port 4000")
})

let data = {
    name: 'Drastyc Entropy'
};

app.get("/", function(req, res) {
    res.render("index", {data});
})