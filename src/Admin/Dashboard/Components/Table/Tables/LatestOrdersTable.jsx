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
import DeliveredIndicator from "../Indicators/DeliveredIndicator";
import PendingIndicator from "../Indicators/PendingIndicator";
import CanceledIndicator from "../Indicators/CanceledIndicator";
import { Modal } from "antd";
import { IoEye } from "react-icons/io5";
import TablePagination from "@mui/material/TablePagination";

const LatestOrdersTable = () => {
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

  // customer details modal open functions
  const [isCustomerModalOpen, setIsCustomerModalOpen] = useState(false);
  const showCustomerModal = () => {
    setIsCustomerModalOpen(true);
  };
  const handleCustomerOk = () => {
    setIsCustomerModalOpen(false);
  };
  const handleCustomerCancel = () => {
    setIsCustomerModalOpen(false);
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
              <TableCell align="right">Customer Details</TableCell>
              <TableCell align="right">Payment Slip</TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="right">Amount</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {latestOrdersData
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
                    {/*  customer details modal */}
                    <Modal
                      title="Customer Details"
                      open={isCustomerModalOpen}
                      onOk={handleCustomerOk}
                      onCancel={handleCustomerCancel}
                    >
                      <div className="w-full h-full mt-[25px] flex flex-col gap-[18px]">
                        {/* customer name */}
                        <div>
                          <div>
                            <span className="text-[16px] font-[600] ">
                              Name
                            </span>
                          </div>
                          <div className="mt-[10px]">
                            <span className="text-[14px] font-[500]">
                              John Smith
                            </span>
                          </div>
                        </div>

                        {/* email address */}
                        <div>
                          <div>
                            <span className="text-[16px] font-[600] ">
                              Email Address
                            </span>
                          </div>
                          <div className="mt-[10px]">
                            <span className="text-[14px] font-[500]">
                              johnsmith@gmail.com
                            </span>
                          </div>
                        </div>

                        {/* phone numbers */}
                        <div>
                          <div>
                            <span className="text-[16px] font-[600] ">
                              Phone Numbers
                            </span>
                          </div>
                          <div className="flex flex-col gap-[2px] mt-[10px]">
                            <span className="text-[14px] font-[500]">
                              077 123 4567
                            </span>
                            <span className="text-[14px] font-[500]">
                              077 192 4867
                            </span>
                          </div>
                        </div>

                        {/* address */}
                        <div>
                          <div>
                            <span className="text-[16px] font-[600] ">
                              Address
                            </span>
                          </div>
                          <div className="flex flex-col mt-[10px]">
                            {/* line 1 */}
                            <span className="text-[14px] font-[500]">
                              Weherekale,
                            </span>
                            {/* line 2 */}
                            <span className="text-[14px] font-[500]">
                              Nalladarankattuwa,
                            </span>
                            {/* city */}
                            <span className="text-[14px] font-[500]">
                              Chilaw
                            </span>
                          </div>
                        </div>
                      </div>
                    </Modal>

                    {/* customer details open button */}
                    <div className="w-full flex justify-center">
                      <button
                        onClick={showCustomerModal}
                        className="flex items-center gap-[5px] justify-center w-fit"
                      >
                        <IoEye className="text-[20px]" />
                        <span>View Details</span>
                      </button>
                    </div>
                  </TableCell>
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
                        <span>View Slip</span>
                      </button>
                    </div>
                  </TableCell>
                  <TableCell align="right">
                    {data.status === "Pending" ? <PendingIndicator /> : null}
                  </TableCell>
                  <TableCell align="right">{data.amount}</TableCell>
                  <TableCell align="right">
                    <LatestOrdersTableAction />
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

export default LatestOrdersTable;
