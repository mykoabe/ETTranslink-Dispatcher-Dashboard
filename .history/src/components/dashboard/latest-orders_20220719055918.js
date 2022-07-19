import { format } from "date-fns";
import { v4 as uuid } from "uuid";
import PerfectScrollbar from "react-perfect-scrollbar";
import { Box, Button, Paper } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { darken, lighten } from "@mui/material/styles";

const columns = [
  { field: "id", headerName: "Post By", width: 70 },
  { field: "dropoff", headerName: "Dropoff Location", width: 200 },
  { field: "packagetype", headerName: "Package Type", width: 200 },
  {
    field: "packageweight",
    headerName: "Package Weight",
    width: 200,
  },
  {
    field: "picloc",
    headerName: "Pic Location",
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
  },
  {
    id: uuid(),
    dropoff: "Addis Ababa",
    packagetype: "Container",
    packageweight: "16kg",
    picloc: "Bahir Dar",
  },
];

const getBackgroundColor = (color, mode) =>
  mode === "dark" ? darken(color, 0.6) : lighten(color, 0.6);

const getHoverBackgroundColor = (color, mode) =>
  mode === "dark" ? darken(color, 0.5) : lighten(color, 0.5);

const LatestOrders = (props) => {
  return (
    <>
      <div style={{ height: 400, width: "100%" }}>
        <Box
          sx={{
            height: 400,
            width: "100%",
            "& .super-app-theme--Open": {
              bgcolor: (theme) => getBackgroundColor(theme.palette.info.main, theme.palette.mode),
              "&:hover": {
                bgcolor: (theme) =>
                  getHoverBackgroundColor(theme.palette.info.main, theme.palette.mode),
              },
            },
            "& .super-app-theme--Filled": {
              bgcolor: (theme) =>
                getBackgroundColor(theme.palette.success.main, theme.palette.mode),
              "&:hover": {
                bgcolor: (theme) =>
                  getHoverBackgroundColor(theme.palette.success.main, theme.palette.),
              },
            },
            "& .super-app-theme--PartiallyFilled": {
              bgcolor: (theme) =>
                getBackgroundColor(theme.palette.warning.main, theme.palette.primary.light),
              "&:hover": {
                bgcolor: (theme) =>
                  getHoverBackgroundColor(theme.palette.warning.main, theme.palette.primary.light),
              },
            },
            "& .super-app-theme--Rejected": {
              bgcolor: (theme) =>
                getBackgroundColor(theme.palette.error.main, theme.palette.primary.light),
              "&:hover": {
                bgcolor: (theme) =>
                  getHoverBackgroundColor(theme.palette.error.main, theme.palette.secondary.light),
              },
            },
          }}
        >
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
