// server.js
var express = require('express')

var PORT = 3000
var app = express()
var routes = require('./routes')
app.get('/home', routes.home)
app.use(express.static('public'));


app.get('/', function (req, res) {
  res.send('<a href = "/images/el.png"><h1>Link to the image</h1></a>')

})

app.listen(PORT, function () {
  console.log('The server is listening on port', PORT)
})
