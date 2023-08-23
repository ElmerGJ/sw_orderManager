import React from 'react';
import { Box, Select, MenuItem, TextField, InputAdornment } from '@mui/material';

const FiltersContainer = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 2,
      }}
    >
      {/* Select Filter */}
      <Select
        label="Filter"
        variant="outlined"
        value="all" // Set "all" as the default value
        sx={{ backgroundColor: '#98134F', color: 'white', height: '40px', width: '25%', borderRadius: 4 }}
      >
        <MenuItem value="all">All</MenuItem>
        <MenuItem value="option1">Option 1</MenuItem>
        <MenuItem value="option2">Option 2</MenuItem>
      </Select>

      {/* Date Picker */}
      <TextField
        label=""
        type="date"
        variant="outlined"
        InputLabelProps={{ shrink: true, style: { color: 'white' } }} // Set text color to white
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <svg width="1em" height="1em" viewBox="0 0 24 24">
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path
                  fill="#98134F"
                  d="M12 4a8 8 0 100 16 8 8 0 000-16zM6 12a6 6 0 1112 0 6 6 0 01-12 0z"
                />
              </svg>
            </InputAdornment>
          ),
          sx: { backgroundColor: '#98134F', borderRadius: 4, height: '40px' },
        }}
      />
    </Box>
  );
};

export default FiltersContainer;
