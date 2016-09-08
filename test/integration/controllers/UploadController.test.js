'use strict'
/* global describe, it */

const assert = require('assert')

describe('MessageController', () => {
  it('should exist', () => {
    assert(global.app.api.controllers['MessageController'])
  })
})
