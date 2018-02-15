import Test from "../../build/index";

let t;

describe("Test", () => {
	test("instantiates", () => {
		expect(() => (t = new Test(5, 10))).not.toThrow();
	});
	test("multiplies", () => {
		t = new Test(5, 10);
		expect(t.multiply()).toBe(50);
	});
	test("divides", () => {
		t = new Test(5, 2);
		expect(t.divide()).toBe(2.5);
	});
	test("mods", () => {
		t = new Test(10, 5);
		expect(t.mod()).toBe(0);
	});
	test("adds", () => {
		t = new Test(5, 2);
		expect(t.add()).toBe(7);
	});
	test("subtracts", () => {
		t = new Test(5, 10);
		expect(t.subtract()).toBe(-5);
	});
});
