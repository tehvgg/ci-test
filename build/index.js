'use strict';

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var Test = function () {
	function Test(a, b) {
		classCallCheck(this, Test);

		this.a = a;
		this.b = b;
	}

	Test.prototype.multiply = function multiply() {
		return this.a * this.b;
	};

	Test.prototype.divide = function divide() {
		return this.a / this.b;
	};

	Test.prototype.mod = function mod() {
		return this.a % this.b;
	};

	Test.prototype.add = function add() {
		return this.a + this.b;
	};

	Test.prototype.subtract = function subtract() {
		return this.a - this.b;
	};

	return Test;
}();

module.exports = Test;
