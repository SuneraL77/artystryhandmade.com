import React from "react";

const CanceledIndicator = () => {
  return (
    <div className="flex items-center gap-[5px] justify-end">
      <div className="w-[8px] h-[8px] rounded-full bg-[#EF0606]"></div>
      <div>
        <span>Canceled</span>
      </div>
    </div>
  );
};

export default CanceledIndicator;
