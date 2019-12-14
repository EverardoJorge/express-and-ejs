const express = require('express')
const app = express()
const path = require('path');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res){
  res.render('index')
})

app.post('/message', function(req, res){
  let message = req.body.message1;
  //res.send(`${message}`)
  res.json({Message:`${message}`});
  
});

app.listen(3000,()=>{
  console.log('Server Running');
  })
