import * as React from "react";
import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
// import Toolbar from "@mui/material/Toolbar";

import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Box, Tooltip, Button, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import NextLink from "next/link";

// import { auth } from "../../../firebase-config";

export default function CustomerList() {
  const columns = [
    { field: "id", headerName: "ID", width: 60 },
    { field: "fullName", headerName: "Full Name", width: 120 },
    { field: "gender", headerName: "Gender", width: 100 },
    {
      field: "email",
      headerName: "Email Address",
      width: 150,
    },
    {
      field: "phoneNumber",
      headerName: "Phone Number",
      width: 120,
    },
    {
      field: "password",
      headerName: "Password",
      width: 100,
    },
    
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/add_customer/" + params.row.id}>
              <Button variant="outlined" color="success">
                edit
              </Button>
            </Link>
            <Tooltip title="Delete">
              <IconButton
                aria-label="delete"
                color="warning"
                onClick={() => handleDelete(params.row.id)}
              >
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          </>
        );
      },
    },
  ];
  const data = [
    {
        id: 1,
        fullName: "John Doe",
        email: "miki@gmail.com",
        phoneNumber: "09876554321",
        password: "123456",
    }
  ]

  return (
    <>
      <Box sx={{ ml: 5 }}>
        <Typography
          sx={{
            p: 1,
            fontSize: 24,
            fontWeight: "bold",
          }}
        >
          Welcome back,
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={12} lg={12}>
            <Paper
              elevation={0}
              sx={{
                p: 2,
                m: 1,
                mx: 3,
                display: "flex",
                flexDirection: "column",
                height: 40,
              }}
            ></Paper>
          </Grid>
        </Grid>

        <Paper
          elevation={0}
          sx={{
            p: 2,
            m: 1,
            mx: 3,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Title>All Customers</Title>
          <Box sx={{ width: "100%", height: 400 }}>
            <DataGrid
              disableSelectionOnClick
              rows={data}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
              checkboxSelection
            />
          </Box>
        </Paper>
      </Box>
    </>
  );
}
