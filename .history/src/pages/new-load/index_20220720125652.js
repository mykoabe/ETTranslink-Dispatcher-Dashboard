import { Box } from "@mui/material";
import React from "react";
import NewForm from "../../components/driver/new-form";
import CustomPaper from "../../components/common/custom-paper";
import { DashboardLayout } from "src/components/dashboard-layout";
import { Container } from "@mui/material";
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
        <Container maxWidth={false} sx={{
            
        }}>
        <AddLoad /> </Container>
      </Box>
    </>
  );
}

AddLoadPage.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
export default AddLoadPage;
