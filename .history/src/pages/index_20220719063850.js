import Head from "next/head";
import { Box, Container, Grid } from "@mui/material";
import dynamic from "next/dynamic";
const LatestOrders = dynamic(() => import("../components/dashboard/latest-orders"));
const DashboardLayout = dynamic(() => import("../components/dashboard-layout"));
const OverallStastics = dynamic(() => import("../components/dashboard/over-all-stastics"));
const ECXLoadStatus = dynamic(() => import("../components/dashboard/stastics"));
const ECXContainer = dynamic(() => import("../components/dashboard/ecx-container-status"));
const LoadStastics = dynamic(() => import("../components/dashboard/load-stastics"));
const TodayCompliants = dynamic(() => import("../components/dashboard/today-compliants"));
const LoadListProgressInfo = dynamic(() => import("../components/dashboard/loadlist-progress-info"));


const Dashboard = () => (
  <>
    <Head>
      <title>ETTransLink Dispatcher</title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        zIndex: 1,
      }}
    >
      <OverallStastics />
      <Container
        maxWidth={false}
        sx={{
          zIndex: 2,
          mt: -8,
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
          <Grid item lg={6} md={12} xl={3} xs={12}>
            <LoadListProgressInfo sx={{ height: "100%" }} />
          </Grid>
          <Grid item lg={12} md={12} xl={12} xs={12}>
            <LatestOrders />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

Dashboard.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Dashboard;
