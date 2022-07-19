import React from "react";
import { Box, Typography, Paper } from "@mui/material";
// import CardChart from "./cardChart";
import CardChart from "./cardChart";
import { grey, red } from "@mui/material/colors";
import PublishedWithChangesIcon from "@mui/icons-material/PublishedWithChanges";

export const TopDashBoardCards = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        p: 1,
        m: 1,
        borderRadius: 1,
        position: "relative",
        zIndex: 4,
        mt: -5,
      }}
    >
      <CardChart
        chartType={"line"}
        title={"ECX Loads"}
        subtitle={"All ECX loads Status"}
        categories={["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]}
      />
      <CardChart
        chartType={"bar"}
        title={"ECX Container Order"}
        subtitle={"All ECX Container Order Status"}
        categories={["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]}
      />
      <CardChart
        chartType={"area"}
        title={"Load Stastics"}
        subtitle={"This Week Performance"}
        categories={["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]}
      />
    </Box>
  );
};

export const DashBoardCards = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        p: 1,
        m: 1,
        borderRadius: 1,
      }}
    >
      <Paper elevation={2} sx={{ height: "200px", width: "100%", mr: 4 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            p: 1,
            m: 1,
            bgcolor: "background.paper",
            borderRadius: 1,
          }}
        >
          <Box>
            <Typography
              sx={{
                color: grey[500],
                mt: 3,
              }}
            >
              Customer Compliants
            </Typography>
            <Typography
              sx={{
                fontSize: 18,
                my: 3,
              }}
            >
              Today Compliants List
            </Typography>
          </Box>
          <PublishedWithChangesIcon
            color="green"
            sx={{
              mt: 3,
            }}
          />
        </Box>
      </Paper>
      <Paper elevation={2} sx={{ width: "100%", mr: 4 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            p: 1,
            m: 1,
            bgcolor: "background.paper",
            borderRadius: 1,
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: 18,
                my: 3,
              }}
            >
              Todays LoadList Progress Info
            </Typography>
          </Box>

          <PublishedWithChangesIcon
            color="green"
            sx={{
              mt: 3,
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            px: 4,
            m: 1,
            bgcolor: "background.paper",
            borderRadius: 1,
            color: red[500],
          }}
        >
          <Typography>Customer Info</Typography>
          <Typography>Loading Date</Typography>
          <Typography>Progress</Typography>
        </Box>
      </Paper>
    </Box>
  );
};
