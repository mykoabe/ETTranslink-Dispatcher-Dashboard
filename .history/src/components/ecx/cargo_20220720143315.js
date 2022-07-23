import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export default function Cargo() {

  const customerData = [
    {
      id: "ginNumber",
      name: "ginNumber",
      type: "text",
      label: "GIN Number",
      autocomplete: "ginNumber",
    },
    {
      id: "ecxBranch",
      name: "ecxBranch",
      type: "text",
      label: "Gender",
      autocomplete: "gender",
    },
    {
      id: "email",
      name: "email",
      type: "text",
      label: "Email Address",
      autocomplete: "email",
    },
    {
      id: "phoneNumber",
      name: "phoneNumber",
      type: "text",
      label: "phoneNumber",
      autocomplete: "phoneNumber",
    },
    {
      id: "password",
      name: "password",
      type: "text",
      label: "Password",
      autocomplete: "password",
    },
  ];
  return (
    <React.Fragment>
      <Typography
        variant="h6"
        gutterBottom
        sx={{
          mb: 3,
        }}
      >
        Cargo Info
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="ginNumber"
            label="GIN Number"
            fullWidth
            autoComplete="ginNumber"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardNumber"
            label="Card number"
            fullWidth
            autoComplete="cc-number"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="expDate"
            label="Expiry date"
            fullWidth
            autoComplete="cc-exp"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            label="CVV"
            helperText="Last three digits on signature strip"
            fullWidth
            autoComplete="cc-csc"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Remember credit card details for next time"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
