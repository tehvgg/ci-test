import foo from "./foo";

foo();

export default class Test {
	constructor(a, b) {
		this.a = a;
		this.b = b;
	}
	multiply() {
		return this.a * this.b;
	}
	divide() {
		return this.a / this.b;
	}
	mod() {
		return this.a % this.b;
	}
	add() {
		return this.a + this.b;
	}
	subtract() {
		return this.a - this.b;
	}
}
