import React from 'react';
import { Stack, Paper, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
// import Item from '../items/Item'; // Update the import path

const ItemsStack = ({ onItemClick }) => {
  const items = [
    { id: 1, text: 'Entrega #1' },
    { id: 1, text: 'Entrega #2' },
    { id: 1, text: 'Entrega #3' },
    { id: 2, text: 'Entrega #4' },
    { id: 2, text: 'Entrega #5' },
    { id: 2, text: 'Entrega #6' },
    { id: 3, text: 'Entrega #7' },
    { id: 3, text: 'Entrega #8' },
    { id: 3, text: 'Entrega #9' },
    { id: 4, text: 'Entrega #10' },
  ];

  return (
    <Stack spacing={2} style={{padding:'10px'}}>
      {items.map((item) => (
        <RouterLink
          key={item.id}
          to={`/delivery-view/${item.id}`}
          style={{ textDecoration: 'none' }} // Remove underline
        >
          <Paper
            elevation={3}
            sx={{
              borderRadius: 6, // Rounded corners
              backgroundColor: '#efe8e8', // Background color
              minHeight: 80, // Increase the height
              display: 'flex',
              alignItems: 'center', // Center the content vertically
              justifyContent: 'center', // Center the content horizontally
              cursor: 'pointer', // Show pointer cursor on hover
            }}
            onClick={() => onItemClick(item.id)}
          >
            <Typography
              variant="body1"
              sx={{ fontWeight: 'bold', textDecoration: 'none', color: 'inherit' }}
            >
              {item.text}
            </Typography>
          </Paper>
        </RouterLink>
      ))}
    </Stack>
  );
};

export default ItemsStack;
