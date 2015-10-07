'use strict';
var assert = require('assert');
var sinon = require('sinon');
var bind = require('./');

it('should bind args ahead of time', function () {
	var spy = sinon.spy();
	var bound = bind('a', 'b');
	bound(spy);
	assert.strictEqual(spy.callCount, 1);
	assert.deepEqual(spy.firstCall.args, ['a', 'b']);
});

it('should allow additional args', function () {
	var spy = sinon.spy();
	var bound = bind('c', 'd');
	bound(spy, 'e', 'f');
	assert.strictEqual(spy.callCount, 1);
	assert.deepEqual(spy.firstCall.args, ['c', 'd', 'e', 'f']);
});

it('should return result of fn', function () {
	var bound = bind('g', 'h');
	var result = bound(joinArgs, 'e', 'f');

	assert.strictEqual(result, 'ghef');

	function joinArgs() {
		return Array.prototype.slice.call(arguments).join('');
	}
});
