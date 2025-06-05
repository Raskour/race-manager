import isValidPosition from './isValidPosition';

describe('isValidPositions', () => {
  test('valid positions without ties', () => {
    expect(isValidPosition([1, 2, 3], 3)).toBe(true);
  });

  test('valid positions with tie for 1st place', () => {
    expect(isValidPosition([1, 1, 3], 3)).toBe(true);
  });

  test('valid positions with tie for 2nd place', () => {
    expect(isValidPosition([1, 2, 2, 4], 4)).toBe(true);
  });

  test('valid positions with all tied at 1st', () => {
    expect(isValidPosition([1, 1, 1], 3)).toBe(true);
  });

  test('invalid: gap in positions', () => {
    expect(isValidPosition([1, 2, 4], 3)).toBe(false);
  });

  test('invalid: tie not followed by correct next position', () => {
    expect(isValidPosition([1, 1, 2], 3)).toBe(false);
  });

  test('invalid: fewer positions than participants', () => {
    expect(isValidPosition([1, 2], 3)).toBe(false);
  });

  test('valid: large tie for 1st', () => {
    expect(isValidPosition([1, 1, 1, 4], 4)).toBe(true);
  });

  test('invalid: tie for 1st not followed correctly', () => {
    expect(isValidPosition([1, 1, 1, 2], 4)).toBe(false);
  });

  test('valid: multiple ties', () => {
    expect(isValidPosition([1, 1, 3, 3, 5], 5)).toBe(true);
  });

  test('valid: unordered but logically valid', () => {
    expect(isValidPosition([3, 1, 1], 3)).toBe(true);
  });

  test('invalid: empty positions array', () => {
    expect(isValidPosition([], 3)).toBe(false);
  });

  test('invalid: tie count mismatch with total participants', () => {
    expect(isValidPosition([1, 1], 3)).toBe(false);
  });
});
