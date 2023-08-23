import React from 'react';
import { IconButton } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle'; // Import the AccountCircle icon
import { Link as RouterLink } from 'react-router-dom';

const AccountButton = () => {
  return (
    <IconButton component={RouterLink} to="/account">
      <AccountCircleIcon /> {/* Icon */}
    </IconButton>
  );
}

export default AccountButton;
