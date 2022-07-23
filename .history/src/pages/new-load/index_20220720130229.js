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
        <Container
          maxWidth={false}
          sx={{
            position: "relative",
            zIndex: 4,
            marginTop: -16,
          }}
        >
          <Grid container spacing={3}>
            <Grid item lg={6} sm={12} xl={6} xs={12} sx={{ zIndex: 4 }}>
              <AddLoad />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

AddLoadPage.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
export default AddLoadPage;
