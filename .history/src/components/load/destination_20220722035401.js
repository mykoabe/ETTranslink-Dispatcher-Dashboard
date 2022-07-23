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
          <Typography
            color={grey[500]}
            sx={{
              fontSize: "0.8rem",
              my: { xs: 2, md: 1 },
            }}
          >
            Cargo Loading Form
          </Typography>
          <Paper
            component="form"
            sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
          >
            <IconButton sx={{ p: "10px" }} aria-label="menu">
              <MenuIcon />
            </IconButton>
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search Google Maps"
              inputProps={{ "aria-label": "search google maps" }}
            />
            <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
              <SearchIcon />
            </IconButton>
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <IconButton color="primary" sx={{ p: "10px" }} aria-label="directions">
              <DirectionsIcon />
            </IconButton>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="to"
            label="Search for places Load to"
            fullWidth
            autoComplete="to"
            variant="outlined"
          />
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
