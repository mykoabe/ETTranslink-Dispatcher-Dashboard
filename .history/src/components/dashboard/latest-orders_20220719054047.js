import { format } from "date-fns";
import { v4 as uuid } from "uuid";
import PerfectScrollbar from "react-perfect-scrollbar";
import { Box, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

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

const latestOrders = [{
  id: uuid(),
  dropoff: "Lagos",
  packagetype: "Cargo",
  packageweight: "10kg",
  picloc: "Lagos",
  
}]

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
