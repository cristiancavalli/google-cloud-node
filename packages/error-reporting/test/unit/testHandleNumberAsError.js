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
var handleNumberAsError = require('../../src/error-handlers/number.js');

describe('handleNumberAsError behaviour under varying input', function() {
  var em;
  beforeEach(function() {em = new ErrorMessage();});
  it('Should not throw given undefined', function() {
    assert.doesNotThrow(handleNumberAsError.bind(null, undefined, em));
  });
  it('Should not throw given null', function() {
    assert.doesNotThrow(handleNumberAsError.bind(null, null, em));
  });
  it('Should not throw given a string', function() {
    assert.doesNotThrow(handleNumberAsError.bind(null, 'test', em));
  });
  it('Should not throw given an instance of Error', function() {
    assert.doesNotThrow(handleNumberAsError.bind(null, new Error(), em));
  });
  it('Should not throw given an object', function() {
    assert.doesNotThrow(handleNumberAsError.bind(null, {}, em));
  });
  it('Should not throw given valid input', function() {
    assert.doesNotThrow(handleNumberAsError.bind(null, 1.3, em));
  });
});
