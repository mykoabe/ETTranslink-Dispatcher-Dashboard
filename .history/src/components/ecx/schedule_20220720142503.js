import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import DateTextField from "../common/text-field";
import { useState } from "react";

export default function Schedule() {
  const [fromSelected, setFromSelected] = useState(new Date());
  const [toSelected, setToSelected] = useState(new Date());

  const handleFromSelected = (date) => {
    setFromSelected(date);
  };
  const handle = (date) => {
    setFromSelected(date);
  };
  console.log(selectedDate);
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Schedule Info
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <DateTextField selectedDate={fromSelected} handleDateChange={handleFromSelected} />
        </Grid>
        <Grid item xs={12}>
          <DateTextField selectedDate={toSelected} handleDateChange={handleToSelected} />
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
