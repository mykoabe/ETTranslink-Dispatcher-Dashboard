import Head from "next/head";
import { useEffect } from "react";
import { Box, Container, Grid } from "@mui/material";
import { LatestOrders } from "../components/dashboard/latest-orders";

import { DashboardLayout } from "../components/dashboard-layout";
import OverallStastics from "src/components/dashboard/over-all-stastics";
import ECXLoadStatus from "src/components/dashboard/stastics/ecx-load-status";
import ECXContainer from "src/components/dashboard/stastics/ecx-container-status";
import LoadStastics from "src/components/dashboard/stastics/load-stastics";
import TodayCompliants from "src/components/dashboard/stastics/today-compliants";
import LoadListProgressInfo from "src/components/dashboard/stastics/loadlist-progress-info";

const Dashboard = () => {
  return (
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
};

Dashboard.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Dashboard;
