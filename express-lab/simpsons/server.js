const express = require('express');
const app = express();


app.get('/Homer', (req,res) =>{
res.send("Homework is great");
});

app.get('/marge', (req,res) =>{
res.send("Test Marge");
});

app.get('/lisa', (req,res) =>{
res.send("test lisa");
});

app.get('/maggie', (req, res) =>{
res.send("test maggie");
});

app.get('/snowball||', (req,res) =>{
res.send("snowball fight"); 
});

app.get('/SantasLittleHelper', (req,res) =>{
res.send("santa");
});km
app.listen(3002, () =>{
console.log('Listen express . . .');
});