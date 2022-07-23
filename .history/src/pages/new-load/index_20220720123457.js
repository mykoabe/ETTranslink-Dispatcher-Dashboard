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
      <Container
        maxWidth={false}
        sx={{
          zIndex: 6,
          mt: -8,
        }}
      >
        <AddLoad />
      </Container>
    </Box>
  </>
);

AddLoadPage.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default AddLoadPage;
