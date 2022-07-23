import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export default function Customer() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Customer Info
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="companyName"
            name="companyName"
            label="Company Name"
            fullWidth
            autoComplete="companyName"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="companyAddress"
            name="companyAddress"
            label="Company Address"
            fullWidth
            autoComplete="companyAddress"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="customerName"
            name="customerName"
            label="Customer Name"
            fullWidth
            autoComplete="customerName"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="customerAddress"
            name="customerAddress"
            label="Customer Address"
            fullWidth
            autoComplete="customerAddress"
            variant="outlined"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
