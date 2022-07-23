import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Customer from "./customer";
import Destination from "./destination";
import Cargo from "./cargo";
import Schedule from "./schedule";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  customLabelStyle: {
    fontSize: "0.7rem",
    fontWeight: "700",
  },
});

const steps = ["Customer", "Destination", "Schedule", "Cargo"];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <Customer />;
    case 1:
      return <Destination />;
    case 2:
      return <Schedule />;
    case 3:
      return <Cargo />;
    default:
      throw new Error("Unknown step");
  }
}

const theme = createTheme();

export default function AddNewLoad() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="sm">
        <Paper variant="outlined" sx={{ my: { xs: 3 }, p: { xs: 2, md: 1 } }}>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel classes={{ label: classes.customLabelStyle }}>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  You have created new load.
                </Typography>
                <Typography variant="subtitle1">
                  You have just created new load and you can start loading.
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                      Back
                    </Button>
                  )}

                  <Button variant="contained" onClick={handleNext} sx={{ mt: 3, ml: 1 }}>
                    {activeStep === steps.length - 1 ? "Add Load" : "Next"}
                  </Button>
                </Box>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}