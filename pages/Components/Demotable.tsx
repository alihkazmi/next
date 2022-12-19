import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import VisibilityIcon from '@mui/icons-material/Visibility';

function createData(
  Name: string,
  Return: string,
  Action: any,


) {
  return { Name, Return, Action };
}

const rows = [
  createData("John Doe", '10 %', <VisibilityIcon></VisibilityIcon>),
  createData("John Doe", '10 %', <VisibilityIcon></VisibilityIcon>),
  createData("John Doe", '10 %', <VisibilityIcon></VisibilityIcon>),
  createData("John Doe", '10 %', <VisibilityIcon></VisibilityIcon>),
];

export default function Demotable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 250 }} aria-label="simple table">
        <TableHead sx={{ backgroundColor: 'whitesmoke' }}>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Return</TableCell>
            <TableCell align="right">Action</TableCell>


          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.Name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.Name}
              </TableCell>
              <TableCell align="right">{row.Return}</TableCell>
              <TableCell align="right">{row.Action}</TableCell>


            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export { }