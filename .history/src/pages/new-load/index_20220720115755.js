import Head from "next/head";
import { Box, Container, Grid } from "@mui/material";
import { DashboardLayout } from "../components/dashboard-layout";
import CustomPaper from "src/components/common/custom-paper";

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
      <CustomPaper title={""} />
      <Container
        maxWidth={false}
        sx={{
          zIndex: 2,
          mt: -8,
        }}
      >
        <Grid container spacing={3}>
          <Grid item lg={4} sm={6} xl={3} xs={12} sx={{ zIndex: 4 }}>
            <T
          </Grid>
          <Grid item lg={4} sm={6} xl={3} xs={12} sx={{ zIndex: 4 }}>
           
          </Grid>
          <Grid item lg={4} sm={6} xl={3} xs={12} sx={{ zIndex: 4 }}>
            
          </Grid>
          <Grid item lg={6} md={12} xl={9} xs={12}>
            
          </Grid>
          <Grid item lg={6} md={12} xl={3} xs={12}>
            
          </Grid>
          <Grid item lg={12} md={12} xl={3} xs={12}>
            
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

Dashboard.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Dashboard;
