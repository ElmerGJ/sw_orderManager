import React from 'react';
import { Button } from '@mui/material';
import ExitImage from '../../assets/exit.png'; // Import the exit image

const ExitButton = () => {
  // Handle the exit action here
  const handleLogout = () => {
    // Eliminar el token almacenado en localStorage u otra ubicación
    localStorage.removeItem('token'); // Cambia 'tuToken' al nombre real del token

    // Redirigir a la página de inicio de sesión
    window.location.href = '/';
};

  return (
    <Button color="primary" variant="text" onClick={handleLogout}>
      <img src={ExitImage} alt="Exit" style={{ width: '24px', height: '24px' }} /> {/* Image */}
    </Button>
  );
};

export default ExitButton;
