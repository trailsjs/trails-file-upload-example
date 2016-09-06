'use strict'

const Controller = require('trails-controller')

/**
 * @module MessageController
 * @description Generated Trails.js Controller.
 */

module.exports = class MessageController extends Controller {

  send (req, res) {

    this.log.info('Form Body')
    this.log.info(req.body)

    this.log.info('Attachment')
    this.log.info(req.file)

    res.render('sent', {
      recipient: req.body.recipient,
      subject: req.body.subject,
      message: req.body.message,
      file: req.file
    })

  }

}
