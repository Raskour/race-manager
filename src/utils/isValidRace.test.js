import isValidRace from './isValidRace';

describe('isValidRace', () => {
  test('returns false for no participants', () => {
    //Arrange
    const participants = [];

    // Act
    const result = isValidRace(participants);

    //Assert
    expect(result.isValid).toBe(false);
  });
  test('returns false for one participant', () => {
    const participants = [{ name: 'Rasmeet', lane: '1' }];

    const result = isValidRace(participants);

    expect(result.isValid).toBe(false);
  });
  test('returns true for two valid participants', () => {
    const participants = [
      { name: 'Rasmeet', lane: '1' },
      { name: 'Anhad', lane: '2' },
    ];

    const result = isValidRace(participants);

    expect(result.isValid).toBe(true);
  });
  test('returns false when same lane is assigned to different students', () => {
    const participants = [
      { name: 'Rasmeet', lane: '1' },
      { name: 'Anhad', lane: '1' },
    ];

    const result = isValidRace(participants);

    expect(result.isValid).toBe(false);
  });
  test('returns false when different lanes are assigned to same student', () => {
    const participants = [
      { name: 'Rasmeet', lane: '1' },
      { name: 'Rasmeet', lane: '2' },
    ];

    const result = isValidRace(participants);

    expect(result.isValid).toBe(false);
  });
  test('returns false when same student is assigned the same lane', () => {
    const participants = [
      { name: 'Rasmeet', lane: '1' },
      { name: 'Rasmeet', lane: '1' },
    ];

    const result = isValidRace(participants);

    expect(result.isValid).toBe(false);
  });
  test('returns false if all fields are not filled', () => {
    const participants = [{ name: 'Rasmeet' }, { name: 'Anhad', lane: '1' }];

    const result = isValidRace(participants);

    expect(result.isValid).toBe(false);
  });
});
