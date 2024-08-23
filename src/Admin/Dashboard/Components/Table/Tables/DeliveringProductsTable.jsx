import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TablePagination from "@mui/material/TablePagination";
import { deliveringProductsData } from "../TableData/DeliveringProductsData";
import Delivering from "../Indicators/Delivering";
import Delivered from "../Indicators/Delivered";
import DeliveringProductsAction from "../../ActionButtons/HomePageActionButton/DeliveringProductsAction";

const DeliveringProductsTable = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow className="bg-[#F2F4FF]">
              <TableCell>Products</TableCell>
              <TableCell align="right">Product ID</TableCell>
              <TableCell align="right">Date</TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="right">Amount</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {deliveringProductsData
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((data) => (
                <TableRow
                  key={data.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {data.product}
                  </TableCell>
                  <TableCell align="right">{data.id}</TableCell>
                  <TableCell align="right">{data.date}</TableCell>
                  <TableCell align="right">
                    {data.status === "Delivering" ? <Delivering /> : null}
                    {data.status === "Delivered" ? <Delivered /> : null}
                  </TableCell>
                  <TableCell align="right">{data.amount}</TableCell>
                  <TableCell align="right">
                    <DeliveringProductsAction />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={deliveringProductsData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
};

export default DeliveringProductsTable;
