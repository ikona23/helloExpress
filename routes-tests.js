/*
 * routes-tests.js
 */

var test = require('tape')
var routes = require('./routes')

test('routes.home responds with index.html', function (t) {
  var res = { sendFile: sendFile }

  routes.index(null, res)

  function sendFile (file) {
    t.equals(file, 'index.html')
    t.end()
  }
})
