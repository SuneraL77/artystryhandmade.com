import React from "react";
import Sidebar from "../Components/Sidebar/Sidebar";
import TodaySales from "../Components/StatusCards/TodaySales";
import TodayRevenue from "../Components/StatusCards/TodayRevenue";
import TotalOrders from "../Components/StatusCards/TotalOrders";

const Transactions = () => {
  return (
    <div className="flex h-[100vh]">
      <div className="flex-[2]">
        <Sidebar />
      </div>
      <div className="flex-[8] pt-[50px] pl-[30px] pr-[80px] Lato">
        {/* title */}
        <div className="flex items-center justify-between">
          <div>
            <span className="Lato text-[22px] font-[700]">Transactions</span>
          </div>

          {/* date */}
          <div className="p-[7px] text-[16px] text-[#676767]  w-[200px] flex justify-end bg-white rounded-md">
            <span>28 Dec, 2023</span>
          </div>
        </div>

        <div>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
