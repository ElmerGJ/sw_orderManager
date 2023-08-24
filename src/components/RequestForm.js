import React from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';

const RequestForm = ({ onClose }) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Aquí puedes manejar la lógica de envío del formulario
        // Luego, cierra el modal
        onClose();
    };

    return (
        <form onSubmit={handleSubmit}>
            <Container maxWidth="sm">
                <Typography variant="h6" gutterBottom>
                    Agregar nueva solicitud
                </Typography>
                <TextField label="Título" fullWidth margin="normal" />
                {/* Agrega más campos de formulario aquí */}
                <Button type="submit" variant="contained" color="primary" style={{ marginRight: '8px' }}>
                    Enviar
                </Button>
                <Button onClick={onClose} variant="contained">
                    Cancelar
                </Button>
            </Container>
        </form>
    );
};

export default RequestForm;
