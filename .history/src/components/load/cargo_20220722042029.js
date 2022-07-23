import * as React from "react";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { MenuItem, Paper } from "@mui/material";

export default function Cargo() {
  const [loadType, setLoadType] = useState("fullLoad");
  const customerData = [
    {
      id: "loadOVerview",
      name: "loadOverview",
      type: "text",
      label: "Load Overview",
      autocomplete: "loadOverview",
    },
    {
      id: "loadDescription",
      name: "loadDescription",
      type: "text",
      label: "Load Description",
      autocomplete: "loadDescription",
    },
    {
      id: "preferredTruckType",
      name: "preferredTruckType",
      type: "text",
      label: "pref",
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
      name: "estimatedPriceCalculated",
      type: "text",
      label: "Estimated Price Calculated",
      autocomplete: "estimated price calculated",
    },
  ];
  const loadTypes = [
    {
      value: "fullLoad",
      label: "Full Load",
    },
    {
      value: "partialLoad",
      label: "Partial Load",
    },
    {
      value: "shortDistance",
      label: "Short Distance",
    },
    {
      value: "longDistance",
      label: "Long Distance",
    },
  ];
  const handleLoadTypeChange = (event) => {
    setLoadType(event.target.value);
  };
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
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            id="loadType"
            select
            fullWidth
            label="Select"
            value={loadType}
            onChange={handleLoadTypeChange}
          >
            {loadTypes.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        {customerData.map((data) => {
          return (
            <Grid item xs={12}>
              <TextField
                id={data.id}
                name={data.name}
                type={data.type}
                label={data.label}
                autoComplete={data.autocomplete}
                fullWidth
                required
                variant="outlined"
              />
            </Grid>
          );
        })}
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
