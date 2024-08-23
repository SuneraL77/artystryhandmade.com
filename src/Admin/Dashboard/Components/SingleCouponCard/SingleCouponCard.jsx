import React from "react";
import { MdDelete } from "react-icons/md";
import moment from "moment";
const SingleCouponCard = ({ item ,deleteC }) => {
  return (
    <div className="flex relative flex-col gap-1 items-center justify-center bg-black text-white p-[20px] w-[200px] h-fit py-[40px] rounded-md hover:shadow-2xl ">
      {/* coupon code */}

      <div className="absolute top-2 right-2">
        <MdDelete className="text-[30px] cursor-pointer text-white hover:text-gray-200" onClick={() =>deleteC(item._id)} />
      </div>

      <div>
      <span className="text-[15px]">
          Expires: {moment(item.date).format("MMMM Do YYYY")}
        </span>
      </div>
      {/* coupon name */}
      <div className="w-[150px] flex items-center text-center justify-center">
        <span className="text-[16px] font-[600]  text-ellipsis overflow-hidden h-7 whitespace-nowrap">
          {item.name}
        </span>
      </div>
      {/* coupon expire date */}
      <div>
        <span className="text-[15px]">{item.date}</span>
      </div>
      {/* discount */}
      <div>
        <span className="text-[23px] font-[500]">
          {item.discount}% Discount
        </span>
      </div>
    </div>
  );
};

export default SingleCouponCard;
