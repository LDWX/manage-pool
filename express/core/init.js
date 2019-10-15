
const requireDirectory = require('require-directory')

class InitManager {
  static initCore (app) {
    InitManager.app = app
    InitManager.initLoadModule()
  }

  static initLoadModule () {
    requireDirectory(module, '../app/api', {
      visit: loadModule
    })
    
    function loadModule(router) {
      InitManager.app.use(router)
    }
  }
}

module.exports = InitManager