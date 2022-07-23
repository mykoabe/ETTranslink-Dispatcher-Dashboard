import { Paper, Typography, Box } from "@mui/material";
import React, { Component, useState } from "react";
import Chart from "react-apexcharts";
import dynamic from "next/dynamic";
const Chart
import PublishedWithChangesIcon from "@mui/icons-material/PublishedWithChanges";
import { grey } from "@mui/material/colors";

const CardChart = ({ chartType, title, subtitle, categories }) => {
  const [options, setOptions] = useState({
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: categories,
    },
  });
  const [series, setSeries] = useState([
    {
      name: "series-1",
      data: [30, 40, 45, 50, 49, 60, 70, 91],
    },
  ]);
  const [responsive, setResponsive] = useState([
    {
      breakpoint: undefined,
      options: {},
    },
  ]);
  const [stroke, setStroke] = useState({
    curve: "smooth",
  });
  return (
    <Paper elevation={9}>
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
            }}
          >
            {title}
          </Typography>
          <Typography
            sx={{
              fontSize: 18,
              my: 3,
            }}
          >
            {subtitle}
          </Typography>
        </Box>
        <PublishedWithChangesIcon color="green" />
      </Box>

      <Chart
        options={options}
        series={series}
        responsive={responsive}
        // stroke={stroke}
        type={chartType}
      />
    </Paper>
  );
};

export default CardChart;
