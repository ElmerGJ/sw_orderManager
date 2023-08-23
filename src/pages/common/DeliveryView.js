import React from 'react';
import { useParams } from 'react-router-dom';

const DeliveryView = () => {
  const { deliveryId } = useParams(); // Get the delivery ID from URL parameter

  // Fetch and display delivery details based on the deliveryId
  return (
    <div>
      <h1>Delivery Details</h1>
      <p>Delivery ID: {deliveryId}</p>
      {/* Display delivery details here */}
    </div>
  );
};

export default DeliveryView;
