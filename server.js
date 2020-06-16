var express = require('express');

// Create our app
var app = express();

// add functionality by 'use', look at folder 'public'
app.use(express.static('public'));

app.listen(3000, function() {
  console.log('[INFO] Express server is up and running on port 3000!');
})
