import Head from "next/head";
import { Box, Container, Grid } from "@mui/material";
import { useState }
import { DashboardLayout } from "../components/dashboard-layout";
import { LatestOrders } from "../components/dashboard/latest-orders";
import OverallStastics from "src/components/dashboard/over-all-stastics";
import ECXLoadStatus from "src/components/dashboard/stastics/ecx-load-status";
import ECXContainer from "src/components/dashboard/stastics/ecx-container-status";
import LoadStastics from "src/components/dashboard/stastics/load-stastics";
import TodayCompliants from "src/components/dashboard/stastics/today-compliants";
import LoadListProgressInfo from "src/components/dashboard/stastics/loadlist-progress-info";
import PickLocation from "src/components/ecx/load-maps/pick-location";

const Dashboard = () => {
  const [coordinates, setCoordinates] = useState({ lt: 0, lg: 0 });
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
          <PickLocation coordinates={coordinates} setCoordinates={setCoordinates} />
        </Container>
      </Box>
    </>
  );
};

Dashboard.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Dashboard;
