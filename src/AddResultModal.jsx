import { useState } from 'react';
import isValidPosition from './utils/isValidPosition';

function AddResultModal({ isOpen, handleSaveResult, selectedRace, onClose }) {
  const [positions, setPositions] = useState([]);

  if (!isOpen) {
    return;
  }

  function handleChangePositions(index, e) {
    const newPositions = [...positions];
    newPositions[index] = Number(e.target.value);
    setPositions(newPositions);
  }

  function handleSave(e) {
    e.preventDefault();
    const totalParticipants = selectedRace.participants.length;
    const validPosition = isValidPosition(positions, totalParticipants);

    if (!validPosition) {
      alert('Positions are not valid');
      return;
    }

    const updatedParticipants = selectedRace.participants.map(
      (participant, index) => ({
        ...participant,
        result: positions[index],
      })
    );

    handleSaveResult({
      ...selectedRace,
      participants: updatedParticipants,
      status: 'Completed',
    });
    onClose();
  }
  return (
    <div className="overlay">
      <div className="content-wrapper">
        <form onSubmit={handleSave}>
          <table>
            <caption>{selectedRace.title}</caption>
            <thead>
              <tr>
                <th>Student</th>
                <th>Lane</th>
                <th>result</th>
              </tr>
            </thead>
            <tbody>
              {selectedRace.participants.map((participant, index) => (
                <tr key={participant.name}>
                  <td>{participant.name}</td>
                  <td>{participant.lane}</td>
                  <td>
                    <input
                      data-testid="position"
                      name="results"
                      id="result"
                      required
                      type="number"
                      onChange={(e) => handleChangePositions(index, e)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button onClick={onClose} type="button">
            Close
          </button>
          <button>Save</button>
        </form>
      </div>
    </div>
  );
}

export default AddResultModal;
