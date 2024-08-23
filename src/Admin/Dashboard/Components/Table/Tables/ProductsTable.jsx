import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TablePagination from "@mui/material/TablePagination";
import { productsTableData } from "../TableData/ProductsTableData";
import DeActive from "../Indicators/DeActive";
import Active from "../Indicators/Active";
import ProductsTableActionButton from "../../ActionButtons/HomePageActionButton/ProductsTableActionButton";
import moment from "moment";

const ProductsTable = ({ products, deleteProduct }) => {
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
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Date</TableCell>
              <TableCell align="right">Category</TableCell>
              <TableCell align="right">Discount</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((data) => (
                <TableRow
                  key={data._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {data.title}
                  </TableCell>
                  <TableCell align="right">
                    {data.prices.map((price, index) => (
                      <div key={index}>
                        {price.currency}.{price.price}
                      </div>
                    ))}
                  </TableCell>
                  <TableCell align="right">
                    {moment(data.createdAt).fromNow()}
                  </TableCell>
                  <TableCell align="right">{data.category?.name}</TableCell>
                  <TableCell align="right">
                    {data.discount ? data.discount : "Not availble"} %
                  </TableCell>
                  <TableCell align="right">
                    <ProductsTableActionButton
                      deleteProduct={deleteProduct}
                      _id={data._id}
                      slug={data.slug}
                    />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={products.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
};

export default ProductsTable;
