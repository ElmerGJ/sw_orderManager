import React from 'react';
import { Paper, Typography } from '@mui/material';

const ItemDetails = ({ description, vendedor, tanques, galones, requisicion, origen, monto }) => {
    return (
        <Paper
            sx={{
                borderRadius: 6,
                padding: 2,
                backgroundColor: '#efe8e8',
            }}
        >
            <Typography variant="body1" gutterBottom>
                {description}
            </Typography>
            <Typography variant="body1" gutterBottom>
                Vendedor: {vendedor}
            </Typography>
            <Typography variant="body1" gutterBottom>
                Tanques: {tanques}
            </Typography>
            <Typography variant="body1" gutterBottom>
                Galones: {galones}
            </Typography>
            <Typography variant="body1" gutterBottom>
                Requisicion: {requisicion}
            </Typography>
            <Typography variant="body1" gutterBottom>
                Origen: {origen}
            </Typography>
            <Typography variant="body1" gutterBottom>
                Monto: <strong style={{ color: 'green' }}>{monto}</strong>
            </Typography>
        </Paper>
    );
};

export default ItemDetails;
