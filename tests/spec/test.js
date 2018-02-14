import Test from '../../index';

let t;

describe('Test', () => {
  test('instantiates', () => {
    expect(() => t = new Test(5, 10)).not.toThrow();
  });
  test('multiplies', () => {
    t = new Test(5, 10);
    expect(t.multiply()).toBe(50);
  });
  test('divides', () => {
    t = new Test(5, 2);
    expect(t.divide()).toBe(2.5);
  });
});
