import { Rate } from "antd";
import React from "react";
import noProfile from "../../assets/noProfile.jpg";

const ReviewCard = ({ item }) => {
  console.log("====>", item);
  return (
    <div className=" flex flex-col gap-[10px] md:w-[80%] w-[100%]">
      <div className="flex items-center gap-[10px]">
        {/* profile img */}
        <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
          <img
            src={noProfile}
            alt="profileImg"
            className="w-full h-full object-cover"
          />
        </div>

        {/* name */}
        <div>
          <span className="Nu text-[19px] font-[700]">
            {item.postedBy?.fname} {item.postedBy?.lname}{" "}
          </span>
        </div>
      </div>

      {/* ratings */}
      <div className="flex items-center gap-[5px]">
        {/* rate */}
        <Rate
          disabled
          defaultValue={item.star}
          allowHalf
          className="flex gap-[0] text-[#ffd000] text-[20px]"
        />

        {/* date */}
      </div>

      {/* review */}
      <div>
        {/* msg */}
        <div>
          <p className="Nu text-[18px] font-[500]">{item.comment}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
