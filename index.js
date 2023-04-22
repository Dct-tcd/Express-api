const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const apiData = require('./data.json'); 

app.get( '/' , (req, res) => {
  res.send('hello world')
});
app.get('/service',(req,res) =>{
  res.send(apiData);
})

app.listen(port , () => {
    console.log("Devda");
})