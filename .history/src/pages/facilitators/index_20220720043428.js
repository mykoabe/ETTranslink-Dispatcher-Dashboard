import Head from "next/head";
import { Box, Container } from "@mui/material";
import { DashboardLayout } from "../../components/dashboard-layout";
import { FacilitatorListToolbar } from "src/components/facilitator/facilitator-list-toolbar";
import FacilitatorListResults from "src/components/facilitator/facilitator-list-results";

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
        <FacilitatorListToolbar />
        <Box sx={{ mt: 3 }}>
          <FacilitatorListResults />
        </Box>
      </Container>
    </Box>
  </>
);

Facilitators.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Facilitators;
