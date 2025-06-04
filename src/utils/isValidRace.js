function isValidRace(participants) {
  const names = new Set();
  const lanes = new Set();

  if (participants.length < 2) {
    return { isValid: false, error: 'At least 2 participants are required' };
  }

  for (let p of participants) {
    if (!p.name || !p.lane) {
      return { isValid: false, error: 'All fields must be filled' };
    }

    if (names.has(p.name.toLowerCase())) {
      return { isValid: false, error: `Duplicate student name: ${p.name}` };
    }

    if (lanes.has(p.lane)) {
      return { isValid: false, error: `Lane ${p.lane} is already taken.` };
    }

    names.add(p.name.toLowerCase());
    lanes.add(p.lane);
  }

  return { isValid: true, error: null };
}

export default isValidRace;
