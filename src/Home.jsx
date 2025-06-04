import React, { useState } from 'react';
import RaceCard from './RaceCard';
import CreateRaceModal from './CreateRaceModal';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [races, setRaces] = useState([]);

  function handleCreateRace() {
    setIsOpen(true);
  }

  function handleCloseModal() {
    setIsOpen(false);
  }

  function handleSave(newRace) {
    setRaces([...races, newRace]);
    setIsOpen(false);
  }
  return (
    <div className="home-container">
      <h2>Races</h2>
      <button className="create-race-btn" onClick={handleCreateRace}>
        + Create Race
      </button>
      <CreateRaceModal
        isOpen={isOpen}
        onClose={handleCloseModal}
        onSave={handleSave}
      >
        <button onClick={handleCloseModal}>Close</button>
      </CreateRaceModal>
      <div className="card-grid">
        {races.map((race, index) => (
          <RaceCard
            key={index}
            title={race.title}
            status={race.status}
            participants={race.participants}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
