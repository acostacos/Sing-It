import React from 'react';

import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';

import './css/App.css';

function App() {
  return (
    <div className="main">
      <Navbar />
      <LandingPage />
    </div>
  );
}

export default App;
