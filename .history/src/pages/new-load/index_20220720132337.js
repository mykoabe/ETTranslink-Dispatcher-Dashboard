import { Box } from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid";
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
          maxWidth="md"
          sx={{
            position: "relative",
            zIndex: 4,
            bgcolor: "red",
          }}
        >
          <Grid container>
            <Grid item lg={6} xl={6} xs={12}>
              <AddLoad />
            </Grid>
            <Grid item lg={6} xl={6} xs={12}>
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
