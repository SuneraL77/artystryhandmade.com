import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { AllSoldItems } from "../TableData/AllSoldItems";

const AllSoldItemss = () => {
  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow className="bg-[#F2F4FF]">
              <TableCell>Products</TableCell>
              <TableCell align="right">Order ID</TableCell>
              <TableCell align="right">Date</TableCell>
              <TableCell align="right">Customer name</TableCell>
              <TableCell align="right">Amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {AllSoldItems.map((data) => (
              <TableRow
                key={data.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {data.product}
                </TableCell>
                <TableCell align="right">{data.id}</TableCell>
                <TableCell align="right">{data.date}</TableCell>
                <TableCell align="right">{data.customerName}</TableCell>
                <TableCell align="right">{data.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default AllSoldItemss;
