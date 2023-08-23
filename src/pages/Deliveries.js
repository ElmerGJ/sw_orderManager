import React from 'react';
import { Container, Box } from '@mui/material';
import BottomMenu from '../components/nav/BottomMenu';
import AccountButton from '../components/buttons/AccountButton';
import ItemsStack from '../components/containers/ItemsStack'; // Import the updated ItemsStack component
import { useNavigate } from 'react-router-dom';

const Deliveries = () => {
  const navigate = useNavigate();

  const handleItemClick = (itemId) => {
    navigate(`/delivery-view/${itemId}`);
  };

  return (
    <Container maxWidth="sm">
      {/* Container for Account and Exit Buttons */}
      <Box sx={{ mb: 2 }}>
        <AccountButton />
      </Box>

      {/* Container for ItemsStack */}
      <Box sx={{ mb: 2 }}>
        <ItemsStack onItemClick={handleItemClick} /> {/* Pass the handleItemClick function */}
      </Box>

      {/* Container for Action Buttons */}
      <Box>
        {/* Add your action buttons here */}
      </Box>

      <BottomMenu selectedRoute="/deliveries" /> {/* Add BottomMenu */}
    </Container>
  );
};

export default Deliveries;
