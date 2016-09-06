'use strict'
/* global describe, it */

const assert = require('assert')

describe('UploadService', () => {
  it('should exist', () => {
    assert(global.app.api.services['UploadService'])
  })
})
