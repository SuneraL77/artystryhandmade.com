import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Pagination from "@mui/material/Pagination";
import { customersData } from "../TableData/CustomersData";
import CustomerActive from "../Indicators/CustomerActive";
import CustomerBlock from "../Indicators/CustomerBlock";
import CustomerTableAction from "../../ActionButtons/HomePageActionButton/CustomerTableAction";

const CustomersTable = ({ users, page, setPage, pageCount, handleUser }) => {
  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow className="bg-[#F2F4FF]">
              <TableCell>Name</TableCell>
              <TableCell align="right">Role</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Orded Items</TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((data) => (
              <TableRow
                key={data._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {data.fname} {""} {data.lname}
                </TableCell>
                <TableCell align="right">
                  <select
                    onChange={(e) => handleUser(data._id, e.target.value)}
                    defaultValue={data.role}
                  >
                    <option value={"user"}>user</option>
                    <option value={"admin"}>admin</option>
                  </select>
                </TableCell>
                <TableCell align="right">{data.email}</TableCell>
                <TableCell align="right">{data.orderedItems}</TableCell>
                <TableCell align="right">
                  {data.status === "Active" ? <CustomerActive /> : null}
                  {data.status === "Block" ? <CustomerBlock /> : null}
                </TableCell>
                <TableCell align="right">
                  <CustomerTableAction />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination
        className="mt-[20px]"
        count={pageCount}
        page={page}
        onChange={(event, value) => setPage(value)}
      />
    </div>
  );
};

export default CustomersTable;
