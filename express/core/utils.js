const promisic = function (func) {
  // return function () {
    return new Promise((resolve, reject) => {
      func(...arguments, function(err, rows){
        if(err) {
          reject(err)
        } else {
          resolve(rows)
        }
      });
    });
  // };
};

module.exports = {
  promisic
}