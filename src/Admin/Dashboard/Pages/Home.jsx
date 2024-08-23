import React, { useState } from "react";
import Sidebar from "../Components/Sidebar/Sidebar";
import TodaySales from "../Components/StatusCards/TodaySales";
import TodayRevenue from "../Components/StatusCards/TodayRevenue";
import TotalOrders from "../Components/StatusCards/TotalOrders";
import HomeActionButton from "../Components/ActionButtons/HomePageActionButton/HomeActionButton";
import { Progress } from "antd";
import LatestOrdersTable from "../Components/Table/Tables/LatestOrdersTable";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
import DeliveredOrdersTable from "../Components/Table/Tables/DeliveredOrdersTable";
import CanceledOrdesTable from "../Components/Table/Tables/CanceledOrdersTable";

const AdminHome = () => {
  return (
    <div className="flex h-screen">
      <div className="flex-[2]">
        <Sidebar />
      </div>

      <div className="flex-[8] pt-[50px] pl-[30px] pr-[80px] Lato overflow-y-auto flex flex-col">
        <div>
          {/* title */}
          <div className="flex items-center justify-between">
            <div>
              <span className="Lato text-[22px] font-[700]">Dashboard</span>
            </div>

            {/* date */}
            <div className="p-[7px] text-[16px] text-[#676767]  w-[200px] flex justify-end bg-white rounded-md">
              <span>28 Dec, 2023</span>
            </div>
          </div>

          {/* status
          <div className="flex justify-between gap-[20px] mt-[25px]">
            <div className="w-full">
              <TodaySales />
            </div>
            <div className="w-full">
              <TodayRevenue />
            </div>
            <div className="w-full">
              <TotalOrders />
            </div>
          </div> */}

          <div className="mt-[40px] flex gap-[60px]"></div>
        </div>

        {/* pending orders table */}
        <div className="mt-[40px] mb-[40px] flex flex-col gap-[10px]">
          {/* title | search */}
          <div className="flex items-center justify-between">
            {/* title */}
            <div>
              <span className="Lato text-[18px] font-[700] text-[#676767]">
                Pending Orders
              </span>
            </div>

            {/* serach */}
            <div>
              <div className="flex bg-[#D9D9D9] w-fit py-[3px] px-[15px] items-center rounded-lg">
                <input
                  type="search"
                  placeholder="Search.."
                  className="bg-transparent outline-none Lato placeholder:text-black/60 placeholder:font-[600] placeholder:text-[14px] w-[240px]"
                />
                <FiSearch className="text-[20px]" />
              </div>
            </div>
          </div>

          {/* pending orders in this LatestOrdersTable */}
          <LatestOrdersTable />
        </div>

        {/* delivered orders table */}
        <div className="mt-[40px] mb-[40px] flex flex-col gap-[10px]">
          {/* title | search */}
          <div className="flex items-center justify-between">
            {/* title */}
            <div>
              <span className="Lato text-[18px] font-[700] text-[#676767]">
                Delivered Orders
              </span>
            </div>

            {/* serach */}
            <div>
              <div className="flex bg-[#D9D9D9] w-fit py-[3px] px-[15px] items-center rounded-lg">
                <input
                  type="search"
                  placeholder="Search.."
                  className="bg-transparent outline-none Lato placeholder:text-black/60 placeholder:font-[600] placeholder:text-[14px] w-[240px]"
                />
                <FiSearch className="text-[20px]" />
              </div>
            </div>
          </div>
          <DeliveredOrdersTable />
        </div>

        {/* canceled orders table */}
        <div className="mt-[40px] mb-[40px] flex flex-col gap-[10px]">
          {/* title | search */}
          <div className="flex items-center justify-between">
            {/* title */}
            <div>
              <span className="Lato text-[18px] font-[700] text-[#676767]">
                Canceled Orders
              </span>
            </div>

            {/* serach */}
            <div>
              <div className="flex bg-[#D9D9D9] w-fit py-[3px] px-[15px] items-center rounded-lg">
                <input
                  type="search"
                  placeholder="Search.."
                  className="bg-transparent outline-none Lato placeholder:text-black/60 placeholder:font-[600] placeholder:text-[14px] w-[240px]"
                />
                <FiSearch className="text-[20px]" />
              </div>
            </div>
          </div>
          <CanceledOrdesTable />
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
