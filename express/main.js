var express = require('express');
let mysql = require('./mysql/mysql.js');

var app = express();

app.get('/test', function(req, res){
  mysql.query('select * from company_info', (err, rows) => {
    // if(err != null) {
    // }
    console.log("rows: ", rows)
    console.log("err: ", err)
    res.send(rows)
  })
});

var server = app.listen(3000, () => {
  console.log(server.address())
});