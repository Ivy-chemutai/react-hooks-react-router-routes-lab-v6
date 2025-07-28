import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import MovieCard from '../components/MovieCard';

function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:4000/movies')
      .then(response => response.json())
      .then(data => {
        setMovies(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching movies:', error);
        setMovies([]);
        setLoading(false);
      });
  }, []);

  return (
    <div className="app-container">
      <NavBar />
      <h1>🎬 Movie Magic 🎬</h1>
      {loading ? (
        <div className="loading">Loading magical movies... ✨</div>
      ) : (
        <div className="movie-grid">
          {movies.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;