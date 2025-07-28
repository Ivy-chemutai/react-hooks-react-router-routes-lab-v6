import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../components/NavBar';

function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:4000/movies/${id}`)
      .then(response => response.json())
      .then(data => setMovie(data))
      .catch(error => {
        console.error('Error fetching movie:', error);
        setMovie(null);
      });
  }, [id]);

  if (!movie) {
    return (
      <div className="app-container">
        <NavBar />
        <div className="loading">Loading movie magic... ✨</div>
      </div>
    );
  }

  return (
    <div className="app-container">
      <NavBar />
      <div className="movie-details">
        <h1>🎆 {movie.title} 🎆</h1>
        <p className="movie-time">⏰ {movie.time} minutes</p>
        <div className="genres-container">
          <h3>🎨 Genres:</h3>
          <div>
            {movie.genres.map((genre, index) => (
              <span key={index}>{genre}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Movie;