import React from "react";

const PendingIndicator = () => {
  return (
    <div className="flex items-center gap-[5px] justify-end">
      <div className="w-[8px] h-[8px] rounded-full bg-[#F29A2E]"></div>
      <div>
        <span>Pending</span>
      </div>
    </div>
  );
};

export default PendingIndicator;
