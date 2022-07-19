import { format } from "date-fns";
import { v4 as uuid } from "uuid";
import PerfectScrollbar from "react-perfect-scrollbar";
import { Box, Button, Paper } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { darken, lighten } from "@mui/material/styles";

const columns = [
  { field: "id", headerName: "Post By", width: 70 },
  { field: "dropoff", headerName: "Dropoff Location", width: 170 },
  { field: "packagetype", headerName: "Package Type", width: 150 },
  {
    field: "packageweight",
    headerName: "Package Weight",
    width: 150,
  },
  {
    field: "picloc",
    headerName: "Pic Location",
    width: 150,
  },
  {
    field: "status",
    headerName: "Status",
    width: 200,
  },
];

const orders = [
  {
    id: uuid(),
    dropoff: "Lagos",
    packagetype: "Cargo",
    packageweight: "10kg",
    picloc: "Lagos",
    status: "Pending",
  },
  {
    id: uuid(),
    dropoff: "Addis Ababa",
    packagetype: "Container",
    packageweight: "16kg",
    picloc: "Bahir Dar",
    status: "Filled",
  },
];

const getBackgroundColor = (color, mode) =>
  mode === "dark" ? darken(color, 0.6) : lighten(color, 0.6);

const getHoverBackgroundColor = (color, mode) =>
  mode === "dark" ? darken(color, 0.5) : lighten(color, 0.5);

const LatestOrders = (props) => {
  return (
    <>
      <div style={{ height: 400, width: "100%", background: "white" }}>
        <Box>
          <DataGrid
            disableSelectionOnClick
            rows={orders}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
            getRowClassName={(params) => `super-app-theme--${params.row.status}`}
          />
        </Box>
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
export default LatestOrders;
