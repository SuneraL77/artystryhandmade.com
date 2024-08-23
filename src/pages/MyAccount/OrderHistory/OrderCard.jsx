import React from "react";

const OrderCard = ({ item }) => {
  return (
    <div className="w-full md:h-[200px] h-[400px] flex md:flex-row flex-col  gap-[20px]">
      <div className="md:w-[200px]  w-full md:h-full h-[200px]">
        <img
          src={item.productImg}
          alt="productImg"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full flex flex-col justify-between bg-gray-200/50 p-[10px]">
        {/* product name | price */}
        <div className="flex md:flex-row flex-col md:items-center items-start md:justify-between">
          <div>
            <span className="text-[20px] font-[700] Nu">{item.name}</span>
          </div>
          <div>
            <span className="Nu font-[600]">LKR. {item.price}</span>
          </div>
        </div>

        {/* product description */}
        <div className="order-card-desc   ">
          <span className="Nu text-[15px] font-[500] ">{item.desc}</span>
        </div>

        {/* date */}
        <div className="">
          <span className="Nu font-[700] text-[16px]">
            <span
              className={`${
                item.status === "Cancelled" ? "text-red-600" : "text-green-600"
              }`}
            >
              {item.status}
            </span>{" "}
            on {item.date}
          </span>
        </div>
        <div className="flex items-center gap-[10px] md:justify-end justify-start mt-[20px] md:mt-0">
          <div>
            <span className="cursor-pointer Nu font-[700]  hover:text-black/90">
              View Product
            </span>
          </div>

          <div>
            <span className="font-[500]">|</span>
          </div>

          <div>
            <span className="cursor-pointer Nu font-[700] hover:text-black/90">
              Buy Again
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
