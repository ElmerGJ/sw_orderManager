import React from 'react';
import { Button } from '@mui/material';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const ExitButton = () => {
  // Handle the exit action here
  const handleExit = () => {
    // Implement the logic to perform the exit action
    // For example, you can clear localStorage and navigate to the login page
    localStorage.clear();
    window.location.href = '/login'; // Change this URL to your login page
  };

  return (
    <Button color="primary" variant="outlined" onClick={handleExit}>
      <ExitToAppIcon />
    </Button>
  );
};

export default ExitButton;
