import React from "react";

// import Toolbar from "@mui/material/Toolbar";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Button, Typography, Box } from "@mui/material";
import Chart from "../../components/charts/chart";
import { grey } from "@mui/material/colors";


export default function OverallStastics() {
  return (
    <Container maxWidth="lg" style={{ zIndex: 1 }}>
      <Grid
        container
        spacing={3}
        style={{
          zIndex: 1,
        }}
      >
        {/* Chart */}
        <Grid item xs={12} md={12} lg={12}>
          <Paper
            elevation={0}
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              height: 350,
              background: "linear-gradient(#080704, #9198e5)",
              position: "relative",
              zIndex: 1,
            }}
          >
            <Chart />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
