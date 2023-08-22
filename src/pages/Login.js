import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';

function Login() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Working on it....!!!
        </p>
        <div>
        <h1>Login</h1>
        <Link to="/deliveries">
            <button>Go to Other Page</button>
        </Link>
        </div>
      </header>
    </div>
  );
}

export default Login;