import React from 'react';
import { Stack, Link, Paper } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import Item from '../items/Item'; // Update the import path

const ItemsStack = ({ onItemClick }) => {
  const items = [
    { id: 1, text: 'Item 1' },
    { id: 2, text: 'Item 2' },
    { id: 3, text: 'Item 3' },
    { id: 4, text: 'Item 4' },
  ];

  return (
    <Stack spacing={2}>
      {items.map((item) => (
        <Link
          key={item.id}
          component={RouterLink}
          to={`/delivery-view/${item.id}`}
          sx={{ textDecoration: 'none', display: 'block' }} // Remove underline and make entire shape clickable
        >
          <Paper
            elevation={3}
            sx={{
              borderRadius: 16, // Rounded corners
              backgroundColor: '#efe8e8', // Background color
              minHeight: 80, // Increase the height
              display: 'flex',
              alignItems: 'center', // Center the content vertically
              justifyContent: 'center', // Center the content horizontally
            }}
            onClick={() => onItemClick(item.id)}
          >
            <Item id={item.id} text={item.text} />
          </Paper>
        </Link>
      ))}
    </Stack>
  );
};

export default ItemsStack;
