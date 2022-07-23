import { Box } from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid";
import CustomPaper from "../../components/common/custom-paper";
import { DashboardLayout } from "src/components/dashboard-layout";
import { Container, Paper, Typography } from "@mui/material";
import AddLoad from "src/components/ecx/add-load";
import Head from "next/head";
function AddLoadPage() {
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
            mt: -16,
          }}
        >
          <Paper elevation={4}>
            <Typography sx={{
                p
            }}>Manage ECX Loads</Typography>
            <Grid container>
              <Grid item lg={6} xl={6} xs={12}>
                <AddLoad />
              </Grid>
              <Grid item lg={6} xl={6} xs={12}>
                <AddLoad />
              </Grid>
            </Grid>
          </Paper>
        </Container>
      </Box>
    </>
  );
}

AddLoadPage.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
export default AddLoadPage;
