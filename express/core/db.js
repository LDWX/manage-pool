var mysql = require('mysql');
var { dbConfig } = require('../config/config.js');

const { promisic } = require('./utils.js')

var pool = mysql.createPool(dbConfig);

function query(sql, callback) {
  pool.getConnection(function(err, connection) {
    connection.query(sql, function(err, rows) {
      callback(err, rows);
      connection.release();
    })
  })
}

module.exports = {
  query: promisic(query)
}