import { Button } from '@mui/material';
// import icon from '../../assets/def_button.png'


const buttonStyles = {

    AcceptButton :{
        border:'2px solid green',
        color: 'white'
    },
    CancelButton:{
        border:'3px solid #98134F',
        color: 'white'
    },
    DeclineButton:{
        border:'3px solid #98134F',
        color: 'white'
    },
    RescheduleButton:{
        border:'3px solid #98134F',
        color: 'white'
    },
    SendButton:{
        border:'3px solid #98134F',
        color: 'white'
    },
    SaveButton:{
        border:'3px solid #98134F',
        color: 'white'
    }
};

const buttonTexts = {
    AcceptButton: 'Aceptar',
    CancelButton: 'Cancelar',
    DeclineButton: 'Rechazar',
    RescheduleButton: 'Reprogramar',
    SendButton: 'Enviar',
    SaveButton: 'Guardar',
};

const defaultButtonStyle = {
    backgroundColor:'black',
    margin: '15px',
    borderRadius:20,
    height:'50px',// Add your desired padding here
};

const ActionButton = ({btn_type}) => {

    const style = {
        ...defaultButtonStyle,
        ...buttonStyles[btn_type],
    };

    const text = buttonTexts[btn_type] || 'Button';

    const handleClick = () => {
        //   to do...
    };

    return(
        <Button onClick={handleClick} variant="contained" style={style}>
            {text}
            {/*<img src={icon} alt={'Button'} style={{width:25}}/>*/}
        </Button>
    );
}
export default ActionButton;
