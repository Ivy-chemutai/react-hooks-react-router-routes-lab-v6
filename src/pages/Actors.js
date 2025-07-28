import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';

function Actors() {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/actors')
      .then(response => response.json())
      .then(data => setActors(data))
      .catch(error => {
        console.error('Error fetching actors:', error);
        setActors([]);
      });
  }, []);

  return (
    <div className="app-container">
      <NavBar />
      <h1>✨ Star Cast ✨</h1>
      {actors.map(actor => (
        <article key={actor.id}>
          <h2>🌟 {actor.name}</h2>
          <ul>
            {actor.movies.map((movie, index) => (
              <li key={index}>🎥 {movie}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}

export default Actors;