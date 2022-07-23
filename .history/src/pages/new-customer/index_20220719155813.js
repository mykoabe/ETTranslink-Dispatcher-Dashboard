import { Box } from "@mui/material";
import { bgcolor } from "@mui/system";
import React from "react";
import NewForm from "./New";
import { Paper } from "@mui/material";
import { grey } from "@mui/material/colors";
import { Typography, Button } from "@mui/material";
import { logout } from "../../../firebase-config";
import CustomPaper from "../common/CustomPaper";
export default function AddCustomerPage({ customerData }) {
  return (
    <>
      <Box
        sx={{
          bgcolor: "#e1e3e6",
        }}
      >
        <CustomPaper title={"CUSTOMER"} />
        <NewForm
          inputs={customerData}
          sx={{
            bgcolor: "#fcfcfa",
          }}
        />
      </Box>
    </>
  );
}
