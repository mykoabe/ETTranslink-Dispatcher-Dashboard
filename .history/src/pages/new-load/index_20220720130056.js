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
          <Grid item lg={4} sm={6} xl={3} xs={12} sx={{ zIndex: 4 }}>
            <ECXLoadStatus />
          </Grid>
          <Grid item lg={4} sm={6} xl={3} xs={12} sx={{ zIndex: 4 }}>
            <ECXContainer />
          </Grid>
          <Grid item lg={4} sm={6} xl={3} xs={12} sx={{ zIndex: 4 }}>
            <LoadStastics />
          </Grid>
          <Grid item lg={6} md={12} xl={9} xs={12}>
            <TodayCompliants />
          </Grid>
          
        </Grid>
          <AddLoad />{" "}
        </Container>
      </Box>
    </>
  );
}

AddLoadPage.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
export default AddLoadPage;
