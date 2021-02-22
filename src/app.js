const express = require('express');
const port = 3000;
const app = express();


app.get('', (req,res) => {
  res.send('Home page');
});

app.get('/help', (req,res) => {
  res.send('My help page');
});

app.get('/products', (req,res) => {
  res.send([
    {id: 1, name: 'Product 1'},
    {id: 2, name: 'Product 2'},
    {id: 3, name: 'Product 3'},
  ]);
});

app.get('*', (req,res) => {
  res.send(`<h1>404 ERROR</h1>`);
});


app.listen(port, ()=>{
  console.log(`Server listen on port ${port}`);
})