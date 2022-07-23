import { Box } from "@mui/material";
import React from "react";
import NewForm from "../../components/driver/new-form";
import CustomPaper from "../../components/common/custom-paper";
import { DashboardLayout } from "src/components/dashboard-layout";
import 
import AddLoad from "src/components/ecx/add-load";
function AddLoadPage() {
  return (
    <>
      <Box
        sx={{
          bgcolor: "#e1e3e6",
        }}
      >
        <CustomPaper title={""} />
        <Container maxWidth={false}>
        <AddLoad />
      </Box>
    </>
  );
}

AddLoadPage.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
export default AddLoadPage;
