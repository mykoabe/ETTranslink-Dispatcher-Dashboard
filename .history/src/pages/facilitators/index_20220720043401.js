import Head from "next/head";
import { Box, Container } from "@mui/material";
import DriverListResults from "src/components/driver/driver-list-results";
import { DriverListToolbar } from "src/components/driver/driver-list-toolbar";
import { DashboardLayout } from "../../components/dashboard-layout";

const Facilitators = () => (
  <>
    <Head>
      <title>Facilitator | Dispatcher</title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
      }}
    >
      <Container maxWidth={false}>
        <Facili />
        <Box sx={{ mt: 3 }}>
          <DriverListResults />
        </Box>
      </Container>
    </Box>
  </>
);

Facilitators.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Facilitators;
