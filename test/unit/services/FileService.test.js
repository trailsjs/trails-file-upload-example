'use strict'
/* global describe, it */

const assert = require('assert')

describe('FileService', () => {
  it('should exist', () => {
    assert(global.app.api.services['FileService'])
  })
})
