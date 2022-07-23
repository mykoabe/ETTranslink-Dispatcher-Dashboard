import { format } from "date-fns";
import { v4 as uuid } from "uuid";
import PerfectScrollbar from "react-perfect-scrollbar";
import {
  Box,
  Card,
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
const createData = (id, deliveryInfo, loadingDate, loadFromTo, customerInfo, action) => {
  id = uuid();
  return { id, deliveryInfo, loadingDate, loadFromTo, customerInfo, action };
};

const orders = [
  createData(
    "Delivery information",
    "All Delivery information will be here",
    "All Loading/Unloading Date will be here",
    "All Load from to information will be here",
    "Customer information"
  ),
  createData(
    "Delivery information2",
    "All Delivery information here 2",
    "All Loading/Unloading Date will be here",
    "All Load from to information will be here",
    "Customer information"
  ),
  createData(
    "Delivery information3",
    "All Delivery information will be here",
    "All Loading/Unloading Date will be here",
    "All Load from to information will be here",
    "Customer information"
  ),
  createData(
    "Delivery information4",
    "All Delivery information will be here",
    "All Loading/Unloading Date will be here",
    "All Load from to information will be here",
    "Customer information"
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
                <TableCell>{order.id}</TableCell>
                <TableCell>
                  <Typography>{order.deliveryInfo}</Typography>
                </TableCell>
                <TableCell>
                  <Typography>{</Typography>
                </TableCell>
                <TableCell>
                  <Typography>All Load from to information will be here</Typography>
                </TableCell>
                <TableCell>
                  <Typography>Customer information</Typography>
                </TableCell>
                <TableCell>
                  <SeverityPill
                    color={
                      (order.status === "updated" && "success") ||
                      (order.status === "pending..." && "warning")
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
