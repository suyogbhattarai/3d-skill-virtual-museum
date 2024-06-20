import React from 'react';
import './LoadingScreen.css';

const LoadingScreen = () => {
  return (
    <div className="loading-container">
      <div className="loading-spinner">
        <div className="spinner-inner"></div>
      </div>
      <h1>Ing Skill Museum </h1>
      <div className="loading-text">Loading...</div>
    </div>
  );
};

export default LoadingScreen;
