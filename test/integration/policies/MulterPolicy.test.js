'use strict'
/* global describe, it */

const assert = require('assert')

describe('MessagePolicy', () => {
  it('should exist', () => {
    assert(global.app.api.policies['MessagePolicy'])
  })
})
