import { Box } from "@mui/material";
import { bgcolor } from "@mui/system";
import React from "react";
import NewForm from "../../compo"
import { Paper } from "@mui/material";
import { grey } from "@mui/material/colors";
import { Typography, Button } from "@mui/material";
import CustomPaper from "../common/CustomPaper";
export default function NewCustomer({ customerData }) {
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
