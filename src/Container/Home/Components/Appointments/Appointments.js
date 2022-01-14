import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
// import { Icon } from "@mui/material";
import Button from "../../../../Components/Button/Button";
import css from "./Appointment.module.scss";
import moment from "moment";

const useStyles = makeStyles({
  table: {
    maxWidth: "100%",
  },
});

export default function Appointments({
  handleOpen,
  appointments,
  handleAppintmentClick,
  selectedAppointmentId,
}) {
  const classes = useStyles();

  const formatDate = (date) => {
    return date ? moment(date).format("DD/MM/YYYY - hh:mm a") : "-";
  };

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
          {appointments?.data?.length ? (
            appointments?.data?.map((row, index) => (
              <TableRow onClick={() => handleAppintmentClick(row)}>
                <TableCell
                  className={`${css.row} ${
                    row.id === selectedAppointmentId ? css.selected : ""
                  }`}
                  align="left"
                >
                  <div className={`${css.details}`}>
                    <div>{row.name}</div>
                    <div className={css.date}>{formatDate(row?.date)}</div>
                  </div>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow className={css.center}>
              <TableCell>
                <Button onClick={handleOpen} label="New Appointment" />
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
