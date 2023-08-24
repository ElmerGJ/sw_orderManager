import React from 'react';
import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';

const FloatingButton = () => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        // Redirect to the RequestForm page
        navigate('/request-form');
    };

    return (
        <Fab
            color="primary"
            aria-label="add"
            style={{
                backgroundColor:'#98134F',
                position: 'fixed',
                bottom: '75px',
                right: '25px',
            }}
            onClick={handleButtonClick}
        >
            <AddIcon />
        </Fab>
    );
};

export default FloatingButton;
