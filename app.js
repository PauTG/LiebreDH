const express = require('express');
const app = express();

const path = require('path');
const PORT = process.env.PORT || 3001;

app.get("/", function(req, res){
    res.sendFile(path.resolve(__dirname,"./views/home.html"))
});

app.get("/register", function(req, res){
    res.sendFile(path.resolve(__dirname,"./views/register.html"))
});

app.get("/login", function(req, res){
    res.sendFile(path.resolve(__dirname,"./views/login.html"))
});

app.use(express.static(path.resolve(__dirname, "./public")));

app.listen(PORT, () => console.log("Escuchando en http://localhost:" + PORT))

