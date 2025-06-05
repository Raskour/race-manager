import React from 'react';

function RaceCard({ title, status, participants, handleAddResult }) {
  return (
    <article className="race-card">
      <h2>{title}</h2>
      <div>
        <h3>Participants</h3>
        <ul>
          {participants.map((participant) => (
            <li key={participant.name}>
              Name: {participant.name} - Lane: {participant.lane} - Result:{' '}
              {participant.result ?? 'Pending'}
            </li>
          ))}
        </ul>
      </div>
      <span>Status: {status}</span>
      {status === 'Pending' && (
        <button onClick={handleAddResult}>Add Result</button>
      )}
    </article>
  );
}

export default RaceCard;
