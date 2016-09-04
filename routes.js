/*
 * routes.js
 */

module.exports = {
  home: home
}
app.get('/about', function (req, res) {
  res.send('about');
});
function home (req, res) {
  res.sendFile(__dirname + '/index.html')
    res.render('home', { title: 'Ninja Store' })
}
