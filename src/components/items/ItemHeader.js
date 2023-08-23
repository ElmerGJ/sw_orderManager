import React from 'react';
import { Paper, Typography } from '@mui/material';

const ItemHeader = ({ title, backgroundColor = '#c5e1a5' }) => {
  return (
    <Paper
      sx={{
        padding: '10px',
        borderRadius: 6,
        backgroundColor: backgroundColor,
        width: '100%',
      }}
    >
      <Typography variant="h5" gutterBottom>
        {title}
      </Typography>
    </Paper>
  );
};

export default ItemHeader;
