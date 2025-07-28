import React from 'react';
import NavBar from '../components/NavBar';

function ErrorPage() {
  return (
    <div className="app-container">
      <NavBar />
      <div className="error-content">
        <h1>😱 Oops! Looks like something went wrong.</h1>
        <div className="error-animation">
          <span>🎥</span>
          <span>💥</span>
          <span>🎬</span>
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;