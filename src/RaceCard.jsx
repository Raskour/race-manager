import React from 'react';

function RaceCard({ title, status, participants }) {
  return (
    <article className="race-card">
      <h2>{title}</h2>
      <div>
        <h3>Participants</h3>
        <ul>
          {participants.map((participant) => (
            <li>
              Name: {participant.name} - Lane: {participant.lane}
            </li>
          ))}
        </ul>
      </div>
      <span>Status: {status}</span>
    </article>
  );
}

export default RaceCard;
