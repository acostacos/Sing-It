import React, { useState } from 'react';
import { Route } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import PlayPage from './pages/PlayPage';

import Navbar from './components/Navbar';

import './css/App.css';

function App() {
  const [isNavMin, setIsNavMin] = useState(false);

  return (
    <div className="main">
      <Navbar minimized={isNavMin}/>
      <Route exact path='/'>
        <LandingPage setIsNavMin={setIsNavMin} />
      </Route>
      <Route path='/play'>
        <PlayPage setIsNavMin={setIsNavMin} />
      </Route>
    </div>
  );
}

export default App;
