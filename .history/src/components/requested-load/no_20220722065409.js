import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@mui/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

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

let id = 0;
function createData(name, calories, fat, carbs, protein) {
  id += 1;
  return { id, name, calories, fat, carbs, protein };
}

const data = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

function SimpleTable(props) {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
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
              
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((n) => {
            return (
              <TableRow key={n.id}>
                <TableCell component="th" scope="row" className={classes.TableCell}>
                  {n.name}
                </TableCell>
                <TableCell numeric className={classes.tableCell}>
                  {n.calories}
                </TableCell>
                <TableCell numeric className={classes.tableCell}>
                  {n.fat}
                </TableCell>
                <TableCell numeric className={classes.tableCell}>
                  {n.carbs}
                </TableCell>
                <TableCell numeric className={classes.tableCell}>
                  {n.protein}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default SimpleTable;
