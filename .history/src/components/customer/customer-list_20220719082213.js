import * as React from "react";
import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Title from "../../charts/Title";
// import Toolbar from "@mui/material/Toolbar";

import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Box, Tooltip, Button, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import NextLink from "next/link";
import { collection, deleteDoc, getDocs, doc } from "firebase/firestore";
import { db } from "../../../firebase-config";

// import { auth } from "../../../firebase-config";

export default function CustomerList() {
  const [data, setData] = useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      let customerList = [];
      try {
        const querySnaphot = await getDocs(collection(db, "customers"));
        querySnaphot.forEach((doc) => {
          customerList.push({ id: doc.id, ...doc.data() });
          console.log(doc.id, "=>", doc.data());
        });

        setData(customerList);
        console.log(customerList);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  console.log(data);
  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "customers", id));
      setData(data.filter((item) => item.id !== id));
    } catch (error) {
      console.log(error);
    }
  };
  
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
    
  ];
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
