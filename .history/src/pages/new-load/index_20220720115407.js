import Head from "next/head";
import { DashboardLayout } from "../components/dashboard-layout";


const LoadPage = () => (
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
          <Grid item lg={12} md={12} xl={3} xs={12}>
            <LatestOrders sx={{ height: "100%" }} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

Dashboard.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Dashboard;
