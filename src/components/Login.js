import React, { useState } from 'react';
import axios from 'axios';


const Login = ({ setLoggedIn }) => {
    const [correo, setCorreo] = useState('');
    const [password, setPassword] = useState('');


    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:5000/api/login', {
                correo,
                password,
            });

            if (response.data.mensaje === 'Inicio de sesión exitoso') {
                const token = response.data.token;
                console.log('Token:', token); // Imprimir el token en la consola
                localStorage.setItem('token', token);

                setLoggedIn(true);
            } else {
                console.error('Credenciales inválidas');
            }
        } catch (error) {
            console.error('Error al iniciar sesión:', error);
        }
    };

    return (
        <div>
            <h2>Iniciar Sesión</h2>
            <label>Correo:</label>
            <input type="text" value={correo} onChange={(e) => setCorreo(e.target.value)} />
            <label>Contraseña:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleLogin}>Iniciar Sesión</button>
        </div>
    );
};

export default Login;
