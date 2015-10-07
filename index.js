'use strict';
var slice = Array.prototype.slice;
module.exports = function () {
	var args = slice.call(arguments);
	return function (callback) {
		var extendedArgs = args;
		if (arguments.length > 1) {
			extendedArgs = extendedArgs.concat(slice.call(arguments, 1));
		}
		return callback.apply(this, extendedArgs);
	};
};
