import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import PreviewIcon from '@mui/icons-material/Preview';
import { Grid, Button } from "@mui/material";


function createData(date, test, laboratory) {
  return { date, test, laboratory };
}

const rows = [
  createData("12-12-2020", "Health care", "Fever"),
  createData("21-12-2020", "Health care", "Headache"),
  createData("12-12-2020", "Health care", "Fever"),
  createData("21-12-2020", "Health care", "Headache"),
];

export default function LabReports() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Test Name</TableCell>
            <TableCell>Laboratory</TableCell>
            <TableCell>Report</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.test}</TableCell>
              <TableCell>{row.laboratory}</TableCell>
              <TableCell>
                <Button
                  variant="outlined"
                  color="primary"
                  startIcon={<PreviewIcon />}
                  onClick={null}
                  component="a"
                  href="https://campus.ahima.org/campus/courses/CB/course_docs/HDCS/Sample_Inpt_HR.pdf"
                  target="_blank"
                >
                  View
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
