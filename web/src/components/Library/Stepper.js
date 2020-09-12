import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import { sizes, largerThan, smallerThan } from '../../components/Helpers/mediaQueries';

const StepperWrapper = styled.div`
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        ${smallerThan.tablet`
          display: none;
        `};


        h1 {
            font-size: 23px;
            text-align: center;
            margin: 10px 0;
            margin-left: 20px;
        }

    .MuiPaper-root {
        background: none;
        width: 100%;
    }

    span {
        color: white;
        font-size: 18px;
    }

    .MuiSvgIcon-root.MuiStepIcon-root {
        fill: #414557;
    }

    .MuiStepIcon-active {
        fill: #2d9632 !important;
    }

    .MuiStepLabel-label {
        color: white !important;
        font-family: inherit;
    }

`;


function getSteps() {
  return ['Intern', 'Junior Software Developer - FE*', 'Software Developer - FE*', 'Senior Software Engineer - FS*', 'Tech Lead', 'Technical Project Manager', 'Chief Technology Officer (CTO)'];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return 'Select campaign settings...';
    case 1:
      return 'What is an ad group anyways?';
    case 2:
      return 'This is the bit I really care about!';
    default:
      return 'Unknown stepIndex';
  }
}

export default function HorizontalLabelPositionBelowStepper() {
  const [activeStep, setActiveStep] = React.useState(1);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <StepperWrapper>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography>All steps completed</Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : null}
      </div>
    </StepperWrapper>
  );
}