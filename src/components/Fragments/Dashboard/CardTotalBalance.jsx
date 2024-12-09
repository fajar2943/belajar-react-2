import * as React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { Icon } from "../../Elements/Icon";

const steps = [
  {
    amount: '$240,399',
    accountType: `Credit Card`,
  },
  {
    amount: '$300,000',
    accountType:
      'Debit Card',
  },
  {
    amount: '$150,999',
    accountType: `E-Wallet`,
  },
];

export default function CardTotalBalance() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = steps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box sx={{ maxWidth: 500, flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          pl: 2,
          bgcolor: 'background.default',
        }}
        className='flex justify-between'
      >
        <span className="font-bold text-lg">$240,399</span>
        <span className="text-end">All Account</span>
      </Paper>
      <Box sx={{ height: 100, maxWidth: 500, width: '100%', p: 2 }} className="flex justify-between bg-primary text-white rounded-md">
        <div>
            Account Type <br/>
            <b>{steps[activeStep].accountType}</b><br />
            **** **** **** 4832 
        </div>
        <div className='text-right'>
            <img src="images/mastercard.png"/>
            <div className='flex'>
                <span className="font-bold text-lg mr-2">{steps[activeStep].amount}</span>
                <Icon.Upright/>
            </div>
        </div>
      </Box>
      <MobileStepper
        variant="dots"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
  );
}
