/* global it */

'use strict';

var assert = require('assert');
var captureStackTrace = require('./');
Error.captureStackTrace = undefined;

it('should capture stack trace', function () {
	var obj = {};
	captureStackTrace(obj);
	assert.ok(obj.stack);
});
