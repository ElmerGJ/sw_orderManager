import React from 'react';
// import { useParams } from 'react-router-dom';
import {Container} from "@mui/material";
import TopContainer from "../../components/containers/TopContainer";
import TitlePage from "../../components/TitlePage";
import ItemDetailsContainer from "../../components/containers/ItemDetailsContainer";
import ActionsContainer from "../../components/containers/ActionsContainer";
import BottomMenu from "../../components/nav/BottomMenu";

const RequestView = () => {

    // Assume you have a way to get the user's role, for example from a global state
    const userRole = 'admin'; // Replace this with the actual user's role

    // const { deliveryId } = useParams(); // Get the delivery ID from URL parameter

    // Fetch and display delivery details based on the deliveryId
    return (
        <div>
            <Container maxWidth="sm" sx={{ padding: 2 }}>
                {/* Top Container */}
                <TopContainer />

                {/* Title Page Container */}
                <TitlePage title={'Solicitud #1'}/>

                {/* Scrollable Content Container */}
                <ItemDetailsContainer/>

                {/* Conditionally render ActionsContainer for admin user */}
                {userRole === 'admin' && <ActionsContainer page={'RequestView'} />}

                {/* BottomMenu */}
                <BottomMenu selectedRoute="/requests" />
            </Container>
        </div>
    );
};

export default RequestView;
