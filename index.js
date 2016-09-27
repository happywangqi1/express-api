var express = require('express')
var app = express()

app.get('/', function (req, res) {
  console.log('hello root');
  res.send('Hello World')
})

app.get('/about', function (req, res) {
  console.log('hello about');
  res.send('Hello about')
})

app.listen(3000,function(){
  console.log('running on port 3000...');
})
