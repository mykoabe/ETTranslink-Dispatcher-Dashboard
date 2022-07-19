import { format } from "date-fns";
import { v4 as uuid } from "uuid";
import PerfectScrollbar from "react-perfect-scrollbar";
import { Box, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

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
    field: "loads",
    headerName: "Loads",
    width: 100,
    renderCell: (params) => {
      return (
        <>
          <Link to={"/add_customer/" + params.row.id + "/loads"}>
            <Button variant="outlined" color="secondary">
              loads
            </Button>
          </Link>
        </>
      );
    },
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

const LatestOrders = (props) => {
  return (
    <>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          p: 2,
        }}
      >
        <Button
          color="primary"
          endIcon={<ArrowRightIcon fontSize="small" />}
          size="small"
          variant="text"
        >
          View all
        </Button>
      </Box>
    </>
  );
};
