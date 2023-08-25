import React from 'react';
import {Container} from "@mui/material";
import TopContainer from "../../components/containers/TopContainer";
import TitlePage from "../../components/TitlePage";
import ItemDetailsContainer from "../../components/containers/ItemDetailsContainer";
import ActionsContainer from "../../components/containers/ActionsContainer";
import BottomMenu from "../../components/nav/BottomMenu";
import { useParams } from 'react-router-dom';

const DeliveryView = () => {
<<<<<<< HEAD
  const { itemId } = useParams();
  // const { deliveryId } = useParams(); // Get the delivery ID from URL parameter
=======
>>>>>>> 2e04b8d57cc6b5811c218e53b7e7aec61f120949

    // Assume you have a way to get the user's role, for example from a global state
    const userRole = 'admin'; // Replace this with the actual user's role

<<<<<<< HEAD
            {/* Title Page Container */}
            <TitlePage title={`Detalles de la Entrega #${itemId}`} />


            {/* Scrollable Content Container */}
            <ItemDetailsContainer itemId={itemId} />
=======
    // const { deliveryId } = useParams(); // Get the delivery ID from URL parameter

    // Fetch and display delivery details based on the deliveryId
    return (
        <div>
            <Container maxWidth="sm" sx={{ padding: 2 }}>
                {/* Top Container */}
                <TopContainer />
>>>>>>> 2e04b8d57cc6b5811c218e53b7e7aec61f120949

                {/* Title Page Container */}
                <TitlePage title={'Entrega #1'}/>

                {/* Scrollable Content Container */}
                <ItemDetailsContainer/>

                {/* Conditionally render ActionsContainer for admin user */}
                {userRole === 'admin' && <ActionsContainer page={'DeliveryView'} />}

                {/* BottomMenu */}
                <BottomMenu selectedRoute="/deliveries" />
            </Container>
        </div>
    );
};

export default DeliveryView;
