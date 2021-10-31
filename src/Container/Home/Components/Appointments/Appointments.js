import React from "react";
import { makeStyles } from "@mui/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Icon } from "@mui/material";

const useStyles = makeStyles({
  table: {
    maxWidth: "100%",
  },
});

function createData(name, age, gender) {
  return { name, age, gender };
}

const rows = [
  createData("Swapnesh kore", 28, "Male"),
  createData("Ajay A", 28, "Male"),
  createData("Ramya", 20, "Female"),
  createData("Balu", 48, "Male"),
  createData("Swapnesh Kore", 28, "Male"),
  createData("Ajay A", 28, "Male"),
  createData("Ramya", 20, "Female"),
  createData("Balu", 48, "Male"),
  createData("Swapnesh Kore", 28, "Male"),
  createData("Ajay A", 28, "Male"),
  createData("Ramya", 20, "Female"),
  createData("Balu", 48, "Male"),
  createData("Swapnesh Kore", 28, "Male"),
  createData("Ajay A", 28, "Male"),
  createData("Ramya", 20, "Female"),
  createData("Balu", 48, "Male"),
];

export default function Appointments() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} elevation={0}>
      <Table className={classes.table} aria-label="simple table">
        {/* <TableHead>
          <TableRow>
            <TableCell align="left"></TableCell>
            <TableCell align="left"></TableCell>
          </TableRow>
        </TableHead> */}
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              <TableCell align="left">{row.name}</TableCell>
              {/* <TableCell align="left">{row.age}</TableCell> */}
              {/* <TableCell align="left">{row.gender}</TableCell> */}
              <TableCell align="right" style={{ cursor: "pointer" }}>
                <Icon color="primary">send</Icon>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
