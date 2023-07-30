/* eslint-disable no-undef */
const { divide, sum, multiply } = require('./02-math');

describe('test for math', () => {
  test('adds 1 + 3 should be 4', () => {
    const rta = sum(1, 3);
    expect(rta).toBe(4);
  });

  test('should be 4', () => {
    const rta = multiply(1, 4);
    expect(rta).toBe(4);
  });

  test('should divide', () => {
    const rta = divide(6, 3);
    expect(rta).toBe(2);

    const rta2 = divide(5, 2);
    expect(rta2).toBe(2.5);

    const rta3 = divide(5, 0);
    expect(rta3).toBeNull();
  });
});
