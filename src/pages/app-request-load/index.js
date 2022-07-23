import { Box } from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid";
import CustomPaper from "../../components/common/custom-paper";
import { DashboardLayout } from "src/components/dashboard-layout";
import { Container, Paper, Typography } from "@mui/material";
import Head from "next/head";
import dynamic from "next/dynamic";
import RequestedLoad from "src/components/requested-load/requested-load";

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
              variant="h5"
              align="left"
              sx={{
                py: 1,
                pl: 4,
              }}
            >
              Update app load request
            </Typography>
            <Grid container>
              <Grid item sm={12}>
                <RequestedLoad />
              </Grid>
            </Grid>
          </Paper>
        </Container>
      </Box>
    </>
  );
}

AppRequestLoad.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
export default AppRequestLoad;
