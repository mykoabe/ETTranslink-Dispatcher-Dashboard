import Head from "next/head";
import { Box, Container, Grid } from "@mui/material";
import { Budget } from "../components/dashboard/budget";
import { LatestOrders } from "../components/dashboard/latest-orders";
import { LatestProducts } from "../components/dashboard/latest-products";
import { Sales } from "../components/dashboard/sales";
import { TasksProgress } from "../components/dashboard/tasks-progress";
import { TotalCustomers } from "../components/dashboard/total-customers";
import { TotalProfit } from "../components/dashboard/total-profit";
import { TrafficByDevice } from "../components/dashboard/traffic-by-device";
import { DashboardLayout } from "../components/dashboard-layout";
import OverallStastics from "src/components/dashboard/stasticsover-all-stastics";
import ECXLoadStatus from "src/components/dashboard/ecx-load-status";
import ECXContainer from "src/components/dashboard/stastics/ecx-container-status";
import LoadStastics from "src/components/dashboard/load-stastics";
import TodayCompliants from "src/components/dashboard/today-compliants";
import LoadListProgressInfo from "src/components/dashboard/loadlist-progress-info";

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
          <Grid item lg={4} md={6} xl={3} xs={12}>
            <LatestProducts sx={{ height: "100%" }} />
          </Grid>
          <Grid item lg={8} md={12} xl={9} xs={12}>
            <LatestOrders />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

Dashboard.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Dashboard;
