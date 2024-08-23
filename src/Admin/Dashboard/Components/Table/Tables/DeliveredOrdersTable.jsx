import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { latestOrdersData } from "../TableData/LatestOrdersData";
import LatestOrdersTableAction from "../../ActionButtons/HomePageActionButton/LatestOrdersTableAction";
import PendingIndicator from "../Indicators/PendingIndicator";

import { Modal } from "antd";
import { IoEye } from "react-icons/io5";
import TablePagination from "@mui/material/TablePagination";
import { deliveredOrdersData } from "../TableData/DeliveredProductData";
import DeliveredIndicator from "../Indicators/DeliveredIndicator";
import DeliveredOrdersActionButton from "../../ActionButtons/HomePageActionButton/DeliveredOrdersActionButton";

const DeliveredOrdersTable = () => {
  // payment slip open and close functions
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  // Pagination state
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(20);

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
              <TableCell align="right">Order ID</TableCell>
              <TableCell align="right">Date</TableCell>
              <TableCell align="right">Customer name</TableCell>
              <TableCell align="right">Payment Slip</TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="right">Amount</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {deliveredOrdersData
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
                  <TableCell align="right">{data.customerName}</TableCell>
                  <TableCell align="right">
                    {/* payment slip modal */}
                    <Modal
                      title="Pyament Slip"
                      open={isModalOpen}
                      onOk={handleOk}
                      onCancel={handleCancel}
                    >
                      <div className="w-full h-[650px]">
                        <img
                          src="https://paysliper.com/assets/templates/image/grid1.jpg"
                          alt="payment slip"
                          className="w-full h-full"
                        />
                      </div>
                    </Modal>

                    {/* payment slip open button */}
                    <div className="w-full flex justify-center">
                      <button
                        onClick={showModal}
                        className="flex items-center gap-[5px] justify-center w-fit"
                      >
                        <IoEye className="text-[20px]" />
                        <span>View</span>
                      </button>
                    </div>
                  </TableCell>
                  <TableCell align="right">
                    {data.status === "Delivered" ? (
                      <DeliveredIndicator />
                    ) : null}
                  </TableCell>
                  <TableCell align="right">{data.amount}</TableCell>
                  <TableCell align="right">
                    <DeliveredOrdersActionButton />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={latestOrdersData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
    </div>
  );
};

export default DeliveredOrdersTable;
