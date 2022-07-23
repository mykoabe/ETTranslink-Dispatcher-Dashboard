import { format } from "date-fns";
import { v4 as uuid } from "uuid";
import PerfectScrollbar from "react-perfect-scrollbar";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button,
  Typography,
} from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { SeverityPill } from "../severity-pill";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    overflowX: "hide",
  },
  table: {
    minWidth: 340,
  },
  tableCell: {
    paddingRight: 4,
    paddingLeft: 5,
  },
});
const createData = (id, deliveryInfo, loadingDate, loadFromTo, customerInfo, status) => {
  id = uuid();
  return { id, deliveryInfo, loadingDate, loadFromTo, customerInfo, status };
};

const orders = [
  createData(
    "Delivery information",
    "All Delivery information will be here",
    "All Loading/Unloading Date will be here",
    "All Load from to information will be here",
    "Customer information",
    "Pending..."
  ),
  createData(
    "Delivery information2",
    "All Delivery information here 2",
    "All Loading/Unloading Date will be here",
    "All Load from to information will be here",
    "Customer information",
    "Updated"
  ),
  createData(
    "Delivery information3",
    "All Delivery information will be here",
    "All Loading/Unloading Date will be here",
    "All Load from to information will be here",
    "Customer information",
    "Pending..."
  ),
  createData(
    "Delivery information4",
    "All Delivery information will be here",
    "All Loading/Unloading Date will be here",
    "All Load from to information will be here",
    "Customer information",
    "Updated"
  ),
];

const RequestedLoad = (props) => {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <PerfectScrollbar>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell className={classes.tableCell}>ID</TableCell>
              <TableCell numeric className={classes.tableCell}>
                Delivery Info
              </TableCell>
              <TableCell numeric className={classes.tableCell}>
                Loading/Unloading Date
              </TableCell>
              <TableCell numeric className={classes.tableCell}>
                Load From/To
              </TableCell>
              <TableCell numeric className={classes.tableCell}>
                Customer Info
              </TableCell>
              <TableCell numeric className={classes.tableCell}>
                Action TODO
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <TableRow hover key={order.id}>
                <TableCell numeric className={classes.tableCell}>
                  {order.id}
                </TableCell>
                <TableCell numeric className={classes.tableCell}>
                  <Typography>{order.deliveryInfo}</Typography>
                </TableCell>
                <TableCell numeric className={classes.tableCell}>
                  <Typography>{order.loadingDate}</Typography>
                </TableCell>
                <TableCell numeric className={classes.tableCell}>
                  <Typography>{order.loadFromTo}</Typography>
                </TableCell>
                <TableCell numeric className={classes.tableCell}>
                  <Typography>{order.customerInfo}</Typography>
                </TableCell>
                <TableCell numeric className={classes.tableCell}>
                  <Typography>{order.status}</Typography>
                </TableCell>
                <TableCell numeric className={classes.tableCell}>
                  <SeverityPill
                    color={
                      (order.status === "Updated" && "success") ||
                      (order.status === "Pending..." && "warning")
                    }
                  >
                    <Button onClick={() => console.log("updated")}>{order.status}</Button>
                  </SeverityPill>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </PerfectScrollbar>
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
    </Paper>
  );
};
export default RequestedLoad;
