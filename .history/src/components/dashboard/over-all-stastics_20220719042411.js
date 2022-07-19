import React from "react";

// import Toolbar from "@mui/material/Toolbar";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Button, Typography, Box } from "@mui/material";
import Chart from "./chart";

export default function OverallStastics() {
  return (
    <Grid
      container
      spacing={3}
      style={{
        zIndex: 1,
      }}
    >
      {/* Chart */}
      <Grid item xs={12} md={12} lg={12}>
        <Box
          sx={{
            p: 2,
            px: 3,
            display: "flex",
            flexDirection: "column",
            height: 350,
            background: "linear-gradient(#2c2c2c, #9198e5)",
            position: "relative",
            zIndex: 1,
          }}
        >
          <Chart />
        </Box>
      </Grid>
    </Grid>
  );
}
