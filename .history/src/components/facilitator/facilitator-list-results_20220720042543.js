import * as React from "react";
import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";

import Paper from "@mui/material/Paper";
import { Box, Tooltip, Button, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import NextLink from "next/link";
import { collection, deleteDoc, getDocs, doc } from "firebase/firestore";
import { db } from "../../firebase-config";

// import { auth } from "../../../firebase-config";

export default function FacilitatorListResults() {
  const [data, setData] = useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      let facilitatorList = [];
      try {
        const querySnaphot = await getDocs(collection(db, "facilitators"));
        querySnaphot.forEach((doc) => {
          facilitatorList.push({ id: doc.id, ...doc.data() });
          console.log(doc.id, "=>", doc.data());
        });

        setData(facilitatorList);
        console.log(facilitatorList);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  console.log(data);
  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "facilitators", id));
      setData(data.filter((item) => item.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const columns = [
    { field: "id", headerName: "ID", width: 60 },
    { field: "name", headerName: "Facilitator Name", width: 120 },
    { field: "facilitator_photo", headerName: "Facilitator Photo", width: 120 },
    {
      field: "phone",
      headerName: "Phone Number",
      width: 150,
    },
    {
      field: "adress",
      headerName: "Adress",
      width: 150,
    },
    {
      field: "type",
      headerName: "Facilitator Type",
      width: 150,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/add_facilitator/" + params.row.id}>
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
  return (
    <>
      <Box>
        <Paper
          elevation={0}
          sx={{
            p: 2,
            m: 1,
            display: "flex",
            flexDirection: "column",
          }}
        >
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
