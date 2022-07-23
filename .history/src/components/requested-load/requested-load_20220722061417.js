import { format } from "date-fns";
import { v4 as uuid } from "uuid";
import PerfectScrollbar from "react-perfect-scrollbar";
import {
  Box,
  Button,
  Card,
  CardHeader,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
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

const orders = [
  {
    id: uuid(),
    ref: "CDD1049",
    amount: 30.5,
    customer: {
      name: "andinet",
    },
    driver: {
      name: "Mekuanint abebe",
    },
    createdAt: 1555016400000,
    status: "pending...",
  },
  {
    id: uuid(),
    ref: "CDD1048",
    amount: 25.1,
    customer: {
      name: "Cao Yu",
    },
    driver: {
      name: "Mekuanint abebe",
    },
    createdAt: 1555016400000,
    status: "updated",
  },
  {
    id: uuid(),
    ref: "CDD1047",
    amount: 10.99,
    customer: {
      name: "Alexa Richardson",
    },
    driver: {
      name: "Mekuanint abebe",
    },
    createdAt: 1554930000000,
    status: "updated",
  },
  {
    id: uuid(),
    ref: "CDD1046",
    amount: 96.43,
    customer: {
      name: "Anje Keizer",
    },
    driver: {
      name: "Mekuanint abebe",
    },
    createdAt: 1554757200000,
    status: "pending...",
  },
  {
    id: uuid(),
    ref: "CDD1045",
    amount: 32.54,
    customer: {
      name: "Clarke Gillebert",
    },
    driver: {
      name: "Mekuanint abebe",
    },
    createdAt: 1554670800000,
    status: "updated",
  },
];

const RequestedLoad = (props) => {
  const classes = useStyles();
  return (
    <Card {...props} className={classes.root}>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 800 }}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell className={classes.table}>ID</TableCell>
                <TableCell>Delivery Info</TableCell>
                <TableCell>Loading/Unloading Date</TableCell>
                <TableCell>Load From/To</TableCell>
                <TableCell>Customer Info</TableCell>
                <TableCell>Action TODO</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((order) => (
                <TableRow hover key={order.id}>
                  <TableCell>{order.id}</TableCell>
                  <TableCell>
                    <Typography>All Delivery information will be here</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>All Loading/Unloading Date will be here</Typography>
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
        </Box>
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
    </Card>
  );
};

export default RequestedLoad;
