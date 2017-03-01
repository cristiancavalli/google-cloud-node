/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

var assert = require('assert');
var ErrorMessage = require('../../src/classes/error-message.js');
var handleErrorClassError = require('../../src/error-handlers/error.js');

describe('Behaviour under various type inputs', function() {
  var em;
  var adversarialObjectInput = {
    stack: {}
  };
  var adversarialObjectInputTwo = {
    stack: []
  };
  beforeEach(function() {em = new ErrorMessage();});
  it('Should not throw given undefined', function() {
    assert.doesNotThrow(handleErrorClassError.bind(null, undefined, em));
  });
  it('Should not throw given null', function() {
    assert.doesNotThrow(handleErrorClassError.bind(null, null, em));
  });
  it('Should not throw given a string', function() {
    assert.doesNotThrow(handleErrorClassError.bind(null, 'string_test', em));
  });
  it('Should not throw given a number', function() {
    assert.doesNotThrow(handleErrorClassError.bind(null, 1.2, em));
  });
  it('Should not throw given an array', function() {
    assert.doesNotThrow(handleErrorClassError.bind(null, [], em));
  });
  it('Should not throw given an object of invalid form', function() {
    assert.doesNotThrow(
      handleErrorClassError.bind(null, adversarialObjectInput, em));
    assert.doesNotThrow(
      handleErrorClassError.bind(null, adversarialObjectInputTwo, em));
  });
  it('Should not throw given valid input', function() {
    assert.doesNotThrow(handleErrorClassError.bind(null, new Error(), em));
  });
});
