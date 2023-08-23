import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/login/Login';
import LandingPage from './pages/LandingPage';

import './App.css';
import BottomMenu from './components/nav/BottomMenu'; // Import the modified BottomMenu component
import Deliveries from './pages/Deliveries';
import Requests from './pages/Requests';
import Stats from './pages/Stats';
import Settings from './pages/Settings';
import DeliveryView from "./pages/common/DeliveryView";

const App = () => {
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setLoggedIn(true);
        }
    }, []);

    return (
        <Router>
            <Routes>
                <Route exact path="/" element={loggedIn ? <Navigate to="/landing" /> : <Login setLoggedIn={setLoggedIn} />}
                />
                <Route path="/landing" element={loggedIn ? (<><LandingPage setLoggedIn={setLoggedIn} />
                                <BottomMenu selectedRoute="/landing" /> {/* Pass selected route */}</>
                        ) : (
                            <Navigate to="/login" />)}
                />
                <Route path="/deliveries" element={<Deliveries />} />
                <Route path="/requests" element={<Requests />} />
                <Route path="/stats" element={<Stats />} />
                <Route path="/settings" element={<Settings />} />
                {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
                <Route path="/delivery-view/:itemId" element={<DeliveryView />}/>  // Use the appropriate component for DeliveryView/>
            </Routes>
            {/* Place the BottomMenu component here outside the Routes */}
            {/*{loggedIn && <BottomMenu />} ///////////////////////////////////// PROBLEM HERE ///////////////////////////////////////////////*/}
            <BottomMenu/>
        </Router>
    );
};

export default App;
