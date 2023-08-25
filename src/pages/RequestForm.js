import React, { useState } from 'react';
import {
  Container,
  TextField,
  FormControl,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  Checkbox,
  FormGroup,
  Button,
} from '@mui/material';

const RequestForm = () => {
  const [seller, setSeller] = useState('');
  const [date, setDate] = useState('');
  const [amount, setAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('cash');
  const [originCDR, setOriginCDR] = useState(false);
  const [originStore, setOriginStore] = useState(false);
  const [ri, setRi] = useState('no');
  const [riNumber, setRiNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
  };

  return (
    <Container maxWidth="sm" sx={{ marginTop: 2 }}>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Seller"
          value={seller}
          onChange={(e) => setSeller(e.target.value)}
          fullWidth
          margin="normal"
          InputProps={{
            sx: { backgroundColor: '#EFE8E8', borderRadius: 6 },
          }}
          InputLabelProps={{
            sx: { color: 'black', position: 'left', backgroundColor: '#EFE8E8' },
          }}
        />
        <TextField
          label="Date"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          fullWidth
          margin="normal"
          InputProps={{
            sx: { backgroundColor: '#EFE8E8', borderRadius: 6 },
          }}
          InputLabelProps={{
            sx: { color: 'black', position: 'left', backgroundColor: '#EFE8E8' },
          }}
        />
        <TextField
          label="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          fullWidth
          margin="normal"
          InputProps={{
            sx: { backgroundColor: '#EFE8E8', borderRadius: 6 },
          }}
          InputLabelProps={{
            sx: { color: 'black', position: 'left', backgroundColor: '#EFE8E8' },
          }}
        />
        <FormControl component="fieldset" margin="normal">
          <FormLabel component="legend">Payment Method</FormLabel>
          <RadioGroup
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            row
          >
            <FormControlLabel
              value="cash"
              control={<Radio sx={{ color: '#98134F' }} />}
              label="Cash"
            />
            <FormControlLabel
              value="credit"
              control={<Radio sx={{ color: '#98134F' }} />}
              label="Credit"
            />
          </RadioGroup>
        </FormControl>
        <FormGroup margin="normal">
          <FormControlLabel
            control={
              <Checkbox
                checked={originCDR}
                onChange={(e) => setOriginCDR(e.target.checked)}
                sx={{ color: '#98134F' }}
              />
            }
            label="Origin CDR"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={originStore}
                onChange={(e) => setOriginStore(e.target.checked)}
                sx={{ color: '#98134F' }}
              />
            }
            label="Origin Store"
          />
        </FormGroup>
        <FormControl component="fieldset" margin="normal">
          <FormLabel component="legend">RI</FormLabel>
          <RadioGroup
            value={ri}
            onChange={(e) => setRi(e.target.value)}
            row
          >
            <FormControlLabel
              value="yes"
              control={<Radio sx={{ color: '#98134F' }} />}
              label="Yes"
            />
            <FormControlLabel
              value="no"
              control={<Radio sx={{ color: '#98134F' }} />}
              label="No"
            />
          </RadioGroup>
        </FormControl>
        <TextField
          label="RI Number"
          value={riNumber}
          onChange={(e) => setRiNumber(e.target.value)}
          fullWidth
          margin="normal"
          InputProps={{
            sx: { backgroundColor: '#EFE8E8', borderRadius: 6 },
          }}
          InputLabelProps={{
            sx: { color: 'black', position: 'left', backgroundColor: '#EFE8E8' },
          }}
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          sx={{ marginTop: 2, backgroundColor: '#98134F', borderRadius: 6, width: '100%' }}
        >
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default RequestForm;
