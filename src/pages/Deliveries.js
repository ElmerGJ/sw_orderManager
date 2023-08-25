import React from 'react';
import { Container } from '@mui/material';
import BottomMenu from '../components/nav/BottomMenu';
import TopContainer from '../components/containers/TopContainer'; // Import the TopContainer component
import ContentContainer from '../components/containers/ContentContainer'; // Import the ContentContainer component
import FilerContainer from '../components/containers/FilterContainer';
import TitlePage from '../components/TitlePage';

const Deliveries = () => {
<<<<<<< HEAD
    
=======

>>>>>>> 2e04b8d57cc6b5811c218e53b7e7aec61f120949
    return (
        <Container maxWidth="sm" sx={{ padding: 2 }}>
            {/* Top Container */}
            <TopContainer />

            {/* Title Page Container */}
            <TitlePage title={'Entregas'}/>

            {/* Filter Container */}
            <FilerContainer page={'DeliveryView'}/>

            {/* Scrollable Content Container */}
            <div style={{ maxHeight: 'calc(100vh - 350px)', overflowY: 'auto', padding: '10px' }}>
                <ContentContainer />
            </div>

            {/* BottomMenu */}
            <BottomMenu selectedRoute="/deliveries" />
        </Container>
    );
};

export default Deliveries;
