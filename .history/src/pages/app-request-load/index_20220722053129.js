import { Box } from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid";
import CustomPaper from "../../components/common/custom-paper";
import { DashboardLayout } from "src/components/dashboard-layout";
import { Container, Paper, Typography } from "@mui/material";
import Head from "next/head";
import dynamic from "next/dynamic";
import AddEcxLoad from "src/components/ecx/add-load";
const PickLocation = dynamic(() => import("src/components/ecx/load-maps/pick-location"), {
  ssr: false,
});
function AppRequestLoad() {
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
        <CustomPaper title={""} />
        <Container
          maxWidth={false}
          sx={{
            position: "relative",
            zIndex: 4,
            mt: -9,
          }}
        >
          <Paper elevation={4}>
            <Typography
              component="h1"
              variant="h4"
              align="left"
              sx={{
                py: 4,
                pl: 4,
              }}
            >
              Application Requested Loads
            </Typography>
            <Grid container>
              <Requ
            </Grid>
          </Paper>
        </Container>
      </Box>
    </>
  );
}

AppRequestLoad.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
export default AppRequestLoad;
