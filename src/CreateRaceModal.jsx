import React, { useState } from 'react';
import AddParticipants from './AddParticipants';
import isValidRace from './utils/isValidRace';

function CreateRaceModal({ isOpen, onClose, onSave }) {
  const [raceTitle, setRaceTitle] = useState('');
  const [participants, setParticipants] = useState([]);

  if (!isOpen) return null;

  function handleAddParticipant() {
    setParticipants([...participants, { name: '', lane: '' }]);
  }

  function handleChange(index, field, value) {
    const updated = [...participants];
    updated[index][field] = value;
    setParticipants(updated);
  }

  function handleRemove(index) {
    const updated = [...participants];
    updated.splice(index, 1);
    setParticipants(updated);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationResult = isValidRace(participants);

    if (!validationResult.isValid) {
      // Show error alert. We can use a toaster library here
      alert(validationResult.error);
      return;
    }

    const race = {
      id: crypto.randomUUID(),
      title: raceTitle,
      participants,
      status: 'Pending', //when the race is created the status is pending
    };

    onSave(race);

    alert(`${race.title}  created`);

    // reset the modal state
    setRaceTitle('');
    setParticipants([]);
    onClose();
  };

  return (
    <div className="overlay">
      <div className="content-wrapper" onClick={(e) => e.stopPropagation()}>
        <h2>Create New Race</h2>
        <form onSubmit={handleSubmit} data-testid="create-race-form">
          <label>
            Race Title:
            <input
              type="text"
              value={raceTitle}
              onChange={(e) => setRaceTitle(e.target.value)}
              placeholder="Enter race title"
              required
            />
          </label>

          <div>
            {participants.map((student, index) => (
              <AddParticipants
                key={index}
                index={index}
                student={student}
                onChange={handleChange}
                onRemove={handleRemove}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={handleAddParticipant}
            style={{ marginTop: '12px' }}
          >
            + Add New Participant
          </button>

          <hr />
          <div
            style={{
              display: 'flex',
              marginTop: '16px',
            }}
          >
            <button type="submit">Create Race</button>

            <button
              onClick={onClose}
              className="close-btn"
              style={{ marginLeft: 'auto' }}
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateRaceModal;
