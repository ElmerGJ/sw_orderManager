import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/login/Login';
import LandingPage from './pages/LandingPage';

import './App.css'
// import BottomMenu from './components/nav/BottomMenu';
import Deliveries from './pages/Deliveries';
import Requests from './pages/Requests';
import Stats from './pages/Stats';
import Settings from './pages/Settings';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  // Check for token in local storage on initial render
  useEffect(() => {
      const token = localStorage.getItem('token');
      if (token) {
          setLoggedIn(true);
      }
  }, []);

  return (
      <Router>
          <Routes>
              {/*<Route exact path="/" element={Login} />*/}
              <Route exact path="/" element={loggedIn ? <Navigate to="/landing" /> : <Login setLoggedIn={setLoggedIn} />} />
              <Route path="/landing" element={loggedIn ? <LandingPage setLoggedIn={setLoggedIn} /> : <Navigate to="/login" />} />
              <Route path="/deliveries" element={<Deliveries/>}/>
              <Route path='/requests' element={<Requests/>}/>
              <Route path='/stats' element={<Stats/>}/>
              <Route path='/settings' element={<Settings/>}/>
          </Routes>
      </Router>
  );
};

export default App;