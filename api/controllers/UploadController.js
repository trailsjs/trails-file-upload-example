'use strict'

const Controller = require('trails-controller')

/**
 * @module FileController
 * @description Generated Trails.js Controller.
 */
module.exports = class FileController extends Controller {

  upload (req, res) {

    this.log.info('the body? ')
    this.log.info(req.body)
    this.log.info('the files? ')
    this.log.info(req.files)
    this.log.info('the file?')
    this.log.info(req.file)

    res.sendStatus(200)

    // this.app.services.FileService.upload(file)
    // .then(() => {
    //
    // })
    // .catch(error => {
    //   res.status(500).send(error)
    // })
  }

}
