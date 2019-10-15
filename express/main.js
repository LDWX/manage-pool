const express = require('express');
const bodyParser = require('body-parser')
const InitManager = require('./core/init')

var app = express();
app.use(bodyParser.json());
InitManager.initCore(app)

var server = app.listen(3000, () => {
  console.log(server.address())
});