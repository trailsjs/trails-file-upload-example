'use strict'
/* global describe, it */

const assert = require('assert')

describe('FileController', () => {
  it('should exist', () => {
    assert(global.app.api.controllers['FileController'])
  })
})
