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
      <div>
        <NavBar />
        <div>Loading...</div>
      </div>
    );
  }

  return (
    <div>
      <NavBar />
      <h1>{movie.title}</h1>
      <p>{movie.time}</p>
      {movie.genres.map((genre, index) => (
        <span key={index}>{genre}</span>
      ))}
    </div>
  );
}

export default Movie;