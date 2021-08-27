import React from 'react';
import { Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';

import './css/App.css';

function App() {
  return (
    <div className="main">
      <Navbar />
      <Route exact path='/'>
        <LandingPage />
      </Route>
    </div>
  );
}

export default App;
