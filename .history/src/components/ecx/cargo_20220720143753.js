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
      label: "ECX Branch",
      autocomplete: "ecxBranch",
    },
    {
      id: "commodityType",
      name: "commodityType",
      type: "text",
      label: "Commodity Type",
      autocomplete: "commodityType",
    },
    {
      id: "commodityGrade",
      name: "commodityGrade",
      type: "text",
      label: "Commodity Grade",
      autocomplete: "commodityGrade",
    },
    {
      id: "numberOfBags",
      name: "numberOfBags",
      type: "text",
      label: "Number of Bags",
      autocomplete: "number of bags",
    },
    {
      id: "loadQuintals",
      name: "loadQuintals",
      type: "text",
      label: "Load Weight/In Quintals",
      autocomplete: "load weight/in quintals",
    },
    {
      id: "productOverview",
      name: "productOverview",
      type: "text",
      label: "Product Overview",
      autocomplete: "product overview",
    },
    {
      id: "productDescription",
      name: "productDescription",
      type: "text",
      label: "Product Description",
      autocomplete: "product description",
    },
    {
      id: "estimatedPriceCalculated",
      name: "productDescription",
      type: "text",
      label: "Product Description",
      autocomplete: "product description",
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
