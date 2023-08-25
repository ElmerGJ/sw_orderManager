import React, { useState, useEffect } from 'react';
import { Stack, Paper, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const ItemsStack = ({ onItemClick }) => {
  const [solicitudes, setSolicitudes] = useState([]);

  useEffect(() => {
    // Fetch the data from the API endpoint /api/admin/solicitudes
    fetch('http://localhost:5000/api/admin/solicitudes')
      .then(response => response.json())
      .then(data => {
        setSolicitudes(data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
<<<<<<< HEAD
    <Stack spacing={2} style={{ padding: '10px' }}>
      {solicitudes.map((solicitud) => (
        <Paper
          key={solicitud.idSolicitud}
          elevation={3}
          sx={{
            borderRadius: 6,
            backgroundColor: '#efe8e8',
            minHeight: 80,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
          }}
          onClick={() => onItemClick(solicitud.idSolicitud)}
        >
          <RouterLink
            to={`/delivery-view/${solicitud.idSolicitud}`}
            style={{ textDecoration: 'none', width: '100%' }}
          >
            <Typography
              variant="body1"
              sx={{ fontWeight: 'bold', textDecoration: 'none', color: 'inherit' }}
            >
              {`Entrega #${solicitud.idSolicitud}`}
            </Typography>
          </RouterLink>
        </Paper>
      ))}
    </Stack>
=======
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
>>>>>>> 2e04b8d57cc6b5811c218e53b7e7aec61f120949
  );
};

export default ItemsStack;
