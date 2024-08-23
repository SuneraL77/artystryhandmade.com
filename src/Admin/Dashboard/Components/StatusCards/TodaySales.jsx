import React from "react";
import CountUp from "react-countup";

const TodaySales = () => {
  return (
    <div className="w-full h-[125px]  bg-[#E6E6E6] p-[15px] rounded-lg shadow-xl flex flex-col justify-between">
      <div>
        <span className="Lato font-[700] text-[#525252] text-[14px]">
          Todays Sales
        </span>
      </div>
      <div>
        <span className="Lato text-[#292929] text-[24px] font-[700]">
          $<CountUp end={20.4} decimals={1} />K
        </span>
      </div>
      <div>
        <span className="Lato font-[500] text-[#676767] text-[14px]">
          We have sold 123 items
        </span>
      </div>
    </div>
  );
};

export default TodaySales;
