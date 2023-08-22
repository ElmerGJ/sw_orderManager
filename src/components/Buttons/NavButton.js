
import { useNavigate } from 'react-router-dom';
import ButtonBase from '@mui/material/ButtonBase';
import buttonImage from '../../assets/deliveries_button.png';  // Importing the image

function NavButton({route, icon}){
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(route)
  };

  return (
    <ButtonBase onClick={handleClick}>
      <img src={icon} alt="My Button" style={{ width: 30 }} />
    </ButtonBase>
  );
}

export default NavButton;
