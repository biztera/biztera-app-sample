var express = require('express');
var app = express();
var request = require('request');
var client_id = process.env.CLIENT_ID;
var client_secret = process.env.CLIENT_SECRET;

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.engine('html', require('swig').renderFile);
app.set('view engine', 'html');

app.get('/', function(req, res) {
  res.render('index', {client_id: client_id});
});

app.get('/callback', function(req, res) {
  if(req.query.error === 'access_denied') {
    return res.render('callback_error', {
      error: 'User denied the access.'
    });
  }
  request({
    url: 'https://biztera.com/oauth2/token',
    form: {
      client_id: client_id,
      client_secret: client_secret,
      code: req.query.code
    },
    method: 'POST'
  }, function(err, response, body) {
    if(err) {
      return res.render('callback_error', {
        error: err.message
      });
    }
    res.render('callback_success', {
      response: body
    });
  });
});

app.use(function(req, res) {
  res.render('404');
});

app.listen(app.get('port'), function() {
  console.log("Sample app is running at localhost:" + app.get('port'));
});
