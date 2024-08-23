import React from "react";
import CountUp from "react-countup";

const TotalOrders = () => {
  return (
    <div className="w-full h-[125px]  bg-[#E6E6E6] p-[15px] rounded-lg shadow-xl flex flex-col justify-between">
      <div>
        <span className="Lato font-[700] text-[#525252] text-[14px]">
          Total Orders
        </span>
      </div>
      <div>
        <span className="Lato text-[#292929] text-[24px] font-[700]">
          <CountUp end={1300} />
        </span>
      </div>
      <div>
        <span className="Lato font-[500] text-[#676767] text-[14px]">
          Availabale to payout
        </span>
      </div>
    </div>
  );
};

export default TotalOrders;
