'use strict'

const Policy = require('trails-policy')

const multer = require('multer')
const upload = multer({dest: 'uploads/'})

/**
 * @module MulterPolicy
 * @description Policy for using multer.
 */
module.exports = class MessagePolicy extends Policy {

  single (req, res, next) {
    upload.single('file')(req, res, err => {
      if (err) {
        this.log.info(err)
      }
      next()
    })
  }

}
