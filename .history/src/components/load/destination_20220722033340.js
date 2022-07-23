import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { grey } from "@mui/material/colors";

export default function Destination() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Destination Info
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography color={grey[100]}>Cargo Loading Form</Typography>
          <TextField
            required
            id="from"
            label="From"
            fullWidth
            autoComplete="from"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField required id="to" label="To " fullWidth autoComplete="to" variant="outlined" />
        </Grid>

        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Save card"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
