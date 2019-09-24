var mysql = require('mysql');
var $dbConfig = require('./mysqlConfig.js');

var pool = mysql.createPool($dbConfig);

function query(sql, callback) {
  pool.getConnection(function(err, connection) {
    connection.query(sql, function(err, rows) {
      callback(err, rows);
      connection.release();
    })
  })
}

module.exports = {
  query: query
}