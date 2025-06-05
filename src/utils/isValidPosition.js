function isValidPosition(positions, totalParticipants) {
  if (positions.length !== totalParticipants) return false;

  if (positions.includes(0)) {
    return false;
  } // 0 is not a valid positon

  const sorted = positions.map(Number).sort((a, b) => a - b);
  let expected = 1;

  for (let i = 0; i < sorted.length; ) {
    const current = sorted[i];
    let tieCount = 0;

    for (let j = i; j < sorted.length; j++) {
      if (sorted[j] === current) {
        tieCount++;
      } else {
        break;
      }
    }

    if (current !== expected) {
      return false;
    }

    i += tieCount;
    expected += tieCount;
  }

  return true;
}

export default isValidPosition;
