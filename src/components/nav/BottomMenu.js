import React from 'react';
import styled from '@emotion/styled';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import NavButton from '../buttons/NavButton';
import btn1 from '../../assets/deliveries_button.png';  // Importing the image
import btn2 from '../../assets/requests_button.png';  // Importing the image
import btn3 from '../../assets/stats_button.png';  // Importing the image
import btn4 from '../../assets/settings_button.png';  // Importing the image



function BottomMenu() {
  const StyledNavigationAction = styled(BottomNavigationAction)`
  &.allItems {
    background-color: black;
  }
`;
  
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      style={{ position: 'fixed', bottom: 0, width: '100%'}}
    >
      <StyledNavigationAction icon={<NavButton route={'/deliveries'} icon={btn1}/>} className='allItems'/>
      <StyledNavigationAction icon={<NavButton route={"/requests"} icon={btn2}/>} className='allItems'/>
      <StyledNavigationAction icon={<NavButton route={"/stats"} icon={btn3}/>} className='allItems'/>
      <StyledNavigationAction icon={<NavButton route={"/settings"} icon={btn4}/>} className='allItems'/>
    </BottomNavigation>
  );
}

export default BottomMenu;
