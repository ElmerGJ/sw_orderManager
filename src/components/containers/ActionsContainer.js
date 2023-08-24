import React from 'react';
import { Box } from '@mui/material';
import ActionButton from '../buttons/ActionButton'; // Import the ActionButton component

const ActionsContainer = ({ page }) => {
    if (page === 'DeliveryView') {
        return (
            <Box sx={{
                display: 'center',
                justifyContent:'center'
            }}>
                <ActionButton btn_type={'RescheduleButton'} />
                <ActionButton btn_type={'CancelButton'} />
            </Box>
        );
    } else if (page === 'RequestView') {
        return (

            <ActionButton btn_type={'AcceptButton'} />,
                <ActionButton btn_type={'DeclineButton'} />
        );
    }

    return null; // Return null if neither condition is met
};

export default ActionsContainer;
