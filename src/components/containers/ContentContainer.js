import React from 'react';
import { Box } from '@mui/material';
import ItemsStack from '../containers/ItemsStack'; // Import the updated ItemsStack component
import { useNavigate } from 'react-router-dom';

const ContentContainer = ({page_content}) => {
  const navigate = useNavigate();

  const handleItemClick = (itemId) => {
    if (page_content === 'Delivery'){
      navigate(`/delivery-view/${itemId}`);
    }
    else {
      navigate(`/request-view/${itemId}`);
    }
  };

  return (
      <Box sx={{ mb: 2, overflowY: 'auto' }}>
        {/* Container for ItemsStack */}
        <ItemsStack onItemClick={handleItemClick} />
      </Box>
  );
};

export default ContentContainer;
