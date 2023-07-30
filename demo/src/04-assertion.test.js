//
test('should first', () => {
  const rta = { name: 'david' };

  expect(rta).toEqual({ name: 'david' });
});

test('should empty', () => {
  const rta = null;
  expect(rta).toBeNull();
  expect(undefined).toBeUndefined();
  expect(rta).not.toBeUndefined();
});

test('should boolean', () => {
  expect(true).toEqual(true);
  expect(false).toEqual(false);

  expect('').toBeFalsy();
  expect(false).toBeFalsy();
  expect(0).toBeFalsy();
});

test('should regexp', () => {
  expect('Christoph').toMatch(/stop/);
});

test('should list / arrays', () => {
  const numbers = [1, 2, 3, 4, 5];
  expect(numbers).toContain(3);
});
