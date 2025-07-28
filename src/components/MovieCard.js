import React from 'react';
import { Link } from 'react-router-dom';

function MovieCard({ movie }) {
  return (
    <article className="movie-card">
      <div className="movie-poster">
        <span className="movie-icon">🎥</span>
      </div>
      <h2>
        <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
      </h2>
      <div className="movie-sparkles">
        <span>✨</span>
        <span>✨</span>
        <span>✨</span>
      </div>
    </article>
  );
}

export default MovieCard;