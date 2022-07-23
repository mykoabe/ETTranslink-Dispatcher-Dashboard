import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from "recharts";

// Generate Sales Data
function createData(month, amount) {
  return { month, amount };
}

const data = [
  createData("Jan", 50),
  createData("Feb", 150),
  createData("Mar", 100),
  createData("Apr", 200),
  createData("May", 150),
  createData("Jun", 100),
  createData("July", 150),
  createData("Aug", 150),
  createData("Sep", 200),
  createData("Nov", 100),
  createData("Dec", undefined),
];

export default function Chart() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <ResponsiveContainer style={{ backgroundColor: "black" }}>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 16,
            left: 16,
          }}
          padding={{
            top: 16,
            right: 16,
            bottom: 16,
            left: 16,
          }}
        >
          <XAxis
            dataKey="month"
            stroke={theme.palette.text.secondary.ligh}
            style={theme.typography.body2}
          />
          <YAxis stroke={theme.palette.text.secondary} style={theme.typography.body2}>
            <Label
              angle={270}
              position="left"
              style={{
                textAnchor: "middle",
                fill: theme.palette.text.primary,
                ...theme.typography.body1,
              }}
            >
              Sales ($)
            </Label>
          </YAxis>
          <Line
            isAnimationActive={false}
            type="monotone"
            dataKey="amount"
            stroke={"white"}
            dot={true}
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}
