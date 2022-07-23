import { Box } from "@mui/material";
import { bgcolor } from "@mui/system";
import React from "react";
import NewForm from "../../components/customer/new-form";
import { Paper } from "@mui/material";
import { grey } from "@mui/material/colors";
import { Typography, Button } from "@mui/material";
import CustomPaper from "../../components/common/custom-paper";
import { DashboardLayout } from "src/components/dashboard-layout";



function NewCustomer() {
  return (
    <>
      <Box
        sx={{
          bgcolor: "#e1e3e6",
        }}
      >
        <CustomPaper title={""} />
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
NewCustomer.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
export default NewCustomer;
