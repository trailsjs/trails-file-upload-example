'use strict'

const Controller = require('trails-controller')

module.exports = class ViewController extends Controller {

  index(req, res) {
    res.render('index')
  }

}
