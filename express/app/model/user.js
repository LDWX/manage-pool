
let mysql = require('../../core/db');
class User {
  getList() {
    return mysql.query('select * from company_info')
  }
}

module.exports = User