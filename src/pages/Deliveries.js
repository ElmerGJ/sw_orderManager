import React from 'react';
import { Container, Box } from '@mui/material';
import BottomMenu from '../components/nav/BottomMenu';
import AccountButton from '../components/buttons/AccountButton';
import ItemsStack from '../components/containers/ItemsStack'; // Import the updated ItemsStack component
import ExitButton from '../components/buttons/ExitButton'; // Import the ExitButton component
import Logo from '../assets/logo.svg'; // Import the logo SVG
import { useNavigate } from 'react-router-dom';

const Deliveries = () => {
  const navigate = useNavigate();

  const handleItemClick = (itemId) => {
    navigate(`/delivery-view/${itemId}`);
  };

  return (
    <Container maxWidth="sm" sx={{ padding: 2 }}>
      <Box
        sx={{
          mb: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Account Button */}
        <AccountButton />

        {/* Logo */}
        <img src={Logo} alt="Logo" style={{ height: '40px', width: 'auto' }} />

        {/* Exit Button */}
        <ExitButton />
      </Box>

      <Box sx={{ mb: 2 }}>
        {/* Container for ItemsStack */}
        <ItemsStack onItemClick={handleItemClick} />
      </Box>

      {/* BottomMenu */}
      <BottomMenu selectedRoute="/deliveries" />
    </Container>
  );
};

export default Deliveries;
