import React from 'react';

const AddParticipants = ({ student, index, onChange, onRemove }) => {
  return (
    <div className="participant-card">
      <label>
        Student Name:
        <input
          type="text"
          value={student.name}
          onChange={(e) => onChange(index, 'name', e.target.value)}
          placeholder="Enter name"
        />
      </label>
      <div>
        <label>
          Lane:
          <input
            type="number"
            value={student.lane}
            onChange={(e) => onChange(index, 'lane', e.target.value)}
            placeholder="Enter lane"
          />
        </label>
      </div>

      <button
        type="button"
        onClick={() => onRemove(index)}
        style={{ marginTop: '8px' }}
      >
        Remove Participant
      </button>
    </div>
  );
};

export default AddParticipants;
