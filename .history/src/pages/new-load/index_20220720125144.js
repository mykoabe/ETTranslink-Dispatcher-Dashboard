import { Box } from "@mui/material";
import React from "react";
import NewForm from "../../components/driver/new-form";
import CustomPaper from "../../components/common/custom-paper";
import { DashboardLayout } from "src/components/dashboard-layout";
function () {
  return (
    <>
      <Box
        sx={{
          bgcolor: "#e1e3e6",
        }}
      >
        <CustomPaper title={""} />
        <NewForm
          inputs={driverData}
          sx={{
            bgcolor: "#fcfcfa",
          }}
        />
      </Box>
    </>
  );
}

NewDriver.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
export default NewDriver;
