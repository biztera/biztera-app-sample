var express = require('express');
var app = express();
var request = require('request');
var client_id = process.env.CLIENT_ID;
var client_secret = process.env.CLIENT_SECRET;

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.send('<h1>Sample Biztera Integration</h1><hr/><h2><a href="https://biztera.com/oauth2/authorize?client_id=' + client_id + '&scope=read_profile,read_org">Connect to Biztera</a></h2>');
});

app.get('/callback', function(req, res) {
  if(req.query.error === 'access_denied') {
    return res.send('User denied.');
  }
  request({
    url: 'https://biztera.com/oauth2/token',
    form: {
      client_id: client_id,
      client_secret: client_secret,
      code: req.query.code
    },
    method: 'POST',
    json: true
  }, function(err, response, body) {
    if(err) {
      return res.send('Error: ' + err.message);
    }
    res.send('<h1>Sample Biztera Integration</h1><hr/><h2>Successfully received access token!</h2><pre>' + JSON.stringify(body) + '</pre><br/><a href="/">Start Over</a>');
  });
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});
