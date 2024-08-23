import React from "react";
import Sidebar from "../Components/Sidebar/Sidebar";
import { FiSearch } from "react-icons/fi";
import CustomersTable from "../Components/Table/Tables/CustomersTable";
import DeliveringProductsTable from "../Components/Table/Tables/DeliveringProductsTable";

const DeliveringProducts = () => {
  return (
    <div className="flex h-screen">
      <div className="flex-[2]">
        <Sidebar />
      </div>
      <div className="flex-[8] pt-[50px] pl-[30px] pr-[80px] Lato overflow-y-auto">
        {/* title */}
        <div className="flex items-center justify-between">
          <div>
            <span className="Lato text-[22px] font-[700]">
              Delivering Products
            </span>
          </div>

          {/* date */}
          <div className="p-[7px] text-[16px] text-[#676767]  w-[200px] flex justify-end bg-white rounded-md">
            <span>28 Dec, 2023</span>
          </div>
        </div>

        <div className="mt-[25px] mb-[40px]">
          {/* title | search */}
          <div className="flex items-center justify-between mb-[10px]">
            {/* title */}
            <div>
              <span className="Lato text-[18px] font-[700] text-[#676767]">
                Delivering Products
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
          <DeliveringProductsTable />
        </div>
      </div>
    </div>
  );
};

export default DeliveringProducts;
