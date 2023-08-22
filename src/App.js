import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import LandingPage from './components/LandingPage';

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
              <Route path="/login" element={loggedIn ? <Navigate to="/landing" /> : <Login setLoggedIn={setLoggedIn} />} />
              <Route path="/landing" element={loggedIn ? <LandingPage setLoggedIn={setLoggedIn} /> : <Navigate to="/login" />} />
          </Routes>
      </Router>
  );
};

export default App;