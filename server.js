var express = require('express');
var app = express();

app.use(express.static('petsApp'));

app.listen(3000, function () {
  console.log('Pets app listening on port 3000');
});
