import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import AddCircleIcon from "@mui/icons-material/AddCircle";

import css from './AddTreatment.module.scss'

const AddTreatment = () => {
  function createData(
    name,
    morning = false,
    afternoon = false,
    evening = false
  ) {
    return { name, morning, afternoon, evening };
  }

  const rows = [createData("", true, false, false)];
  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Medicine</TableCell>
              <TableCell>Morning</TableCell>
              <TableCell>Afternoon</TableCell>
              <TableCell>Night</TableCell>
              <TableCell>All Time</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <TextField
                    id="standard-basic"
                    label="Medicine"
                    value={row.name}
                    variant="standard"
                  />
                </TableCell>
                <TableCell>
                  <Checkbox />
                </TableCell>
                <TableCell>
                  <Checkbox />
                </TableCell>

                <TableCell>
                  <Checkbox />
                </TableCell>
                <TableCell>
                  <Checkbox />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button className={css.addButton} variant="outlined" startIcon={<AddCircleIcon />}>
        Add Medicine
      </Button>
      
    </div>
  );
};

export default AddTreatment;
