import React, { useState } from 'react';
import RaceCard from './RaceCard';
import CreateRaceModal from './CreateRaceModal';
import AddResultModal from './AddResultModal';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [races, setRaces] = useState([]);
  const [selectedRace, setSelectedRace] = useState(null);

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

  function handleSaveResult(raceResult) {
    const updatedRaces = [...races];
    const raceIndex = updatedRaces.findIndex(
      (race) => race.id === raceResult.id
    );
    updatedRaces[raceIndex] = raceResult;
    setRaces(updatedRaces);
    alert('Results are saved');
  }
  function handleAddResult(raceId) {
    const selectedRace = races.find((race) => race.id === raceId);
    setSelectedRace(selectedRace);
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
            key={race.id}
            title={race.title}
            status={race.status}
            participants={race.participants}
            handleAddResult={() => handleAddResult(race.id)}
          />
        ))}
      </div>
      {selectedRace && (
        <AddResultModal
          isOpen
          selectedRace={selectedRace}
          handleSaveResult={handleSaveResult}
          onClose={() => setSelectedRace(null)}
        />
      )}
    </div>
  );
};

export default Home;
