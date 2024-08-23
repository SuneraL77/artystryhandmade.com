import React from "react";
import Sidebar from "../Components/Sidebar/Sidebar";
import { Progress } from "antd";
import AllSoldItems from "../Components/Table/Tables/AllSoldItems";
import { FiSearch } from "react-icons/fi";

const SoldItems = () => {
  // dummy data
  const MostSoldedItems = [
    {
      id: 1,
      item: "Wallet",
      precent: 70,
    },

    {
      id: 2,
      item: "Bags",
      precent: 40,
    },

    {
      id: 3,
      item: "Belts",
      precent: 60,
    },

    {
      id: 4,
      item: "Phone Covers",
      precent: 80,
    },

    {
      id: 5,
      item: "Laptop Bags",
      precent: 20,
    },
  ];

  return (
    <div className="flex h-screen">
      <div className="flex-[2]">
        <Sidebar />
      </div>
      <div className="flex-[8] pt-[50px] pl-[30px] pr-[80px] Lato overflow-y-auto">
        {/* title */}
        <div className="flex items-center justify-between">
          <div>
            <span className="Lato text-[22px] font-[700]">Sold Items</span>
          </div>

          {/* date */}
          <div className="p-[7px] text-[16px] text-[#676767]  w-[200px] flex justify-end bg-white rounded-md">
            <span>28 Dec, 2023</span>
          </div>
        </div>

        {/* most sold items */}
        <div className="mt-[50px]">
          {/* title */}
          <div>
            <span className="Lato text-[18px] font-[700]">Most Sold Items</span>
          </div>

          {/* progrees bars */}
          <div className="flex gap-[50px]">
            <div className="flex-[1]">
              <div className="mt-[25px] flex flex-col gap-[5px]">
                {MostSoldedItems.map((item) => (
                  <div className="flex flex-col" key={item.id}>
                    <div>
                      <span className="Lato text-[15px] font-[600]">
                        {item.item}
                      </span>
                    </div>
                    <div>
                      <Progress percent={item.precent} strokeColor={"#111"} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-[1]">
              <div className="mt-[25px] flex flex-col gap-[5px]">
                {MostSoldedItems.map((item) => (
                  <div className="flex flex-col" key={item.id}>
                    <div>
                      <span className="Lato text-[15px] font-[600]">
                        {item.item}
                      </span>
                    </div>
                    <div>
                      <Progress percent={item.precent} strokeColor={"#111"} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-[1]"></div>
          </div>
          {/* progrees bars end */}

          {/* table */}
          <div className="mt-[40px] mb-[40px] flex flex-col gap-[10px]">
            {/* title | search */}
            <div className="flex items-center justify-between">
              {/* title */}
              <div>
                <span className="Lato text-[18px] font-[700] text-[#676767]">
                  Latest Orders
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
            <AllSoldItems />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoldItems;
