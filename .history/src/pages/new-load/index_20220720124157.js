import Head from "next/head";
import { Box, Container, Grid, Typography } from "@mui/material";
import { DashboardLayout } from "src/components/dashboard-layout";
import CustomPaper from "src/components/common/custom-paper";
import AddLoad from "src/components/ecx/add-load";

const AddLoadPage = () => (
  <>
    <Head>
      <title>Add Load</title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        zIndex: 1,
      }}
    >
      <CustomPaper
        title={""}
        sx={{
          zIndex: 1,
        }}
      />

      <Grid
        container
        spacing={3}
        sx={{
          backgroundColor: "red",
        }}
      >
        <Grid item lg={6} sm={12} xl={6} xs={12} sx={{ zIndex: 4 }}>
          <AddLoad />
        </Grid>
      </Grid>
    </Box>
  </>
);

AddLoadPage.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default AddLoadPage;
