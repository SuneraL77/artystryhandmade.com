import React from "react";

const OrderCard = ({ item }) => {
  return (
    <div>
      <div className="flex bg-[#D9D9D9] mt-[25px] p-[20px] rounded-md gap-[50px]">
        <div className="flex-[3]">
          {/* customer details */}
          <div className="flex flex-col gap-[10px]">
            <div className="flex flex-col gap-[5px]">
              {/* title */}
              <div>
                <span className="Lato text-[18px] font-[700]">
                  Customer Details
                </span>
              </div>

              <div className="flex flex-col gap-[5px]">
                {/* name */}
                <span className="Lato text-[15px] font-[500] text-[#292929]">
                  {item.name}
                </span>

                {/* user Id */}
                <span className="Lato text-[15px] font-[500] text-[#292929]">
                  {item.id}
                </span>
              </div>
            </div>

            {/* customer address */}
            <div className="flex flex-col gap-[5px]">
              {/* title */}
              <div>
                <span className="Lato text-[16px] font-[700]">
                  Customer Address
                </span>
              </div>

              <div className="flex flex-col gap-[5px]">
                {/* address */}
                <span className="Lato text-[15px] font-[500] text-[#292929]">
                  {item.address}
                </span>
              </div>
            </div>

            {/* customer    mobile number */}
            <div className="flex flex-col gap-[5px]">
              {/* title */}
              <div>
                <span className="Lato text-[16px] font-[700]">
                  Customer Mobile Number
                </span>
              </div>

              <div className="flex flex-col gap-[5px]">
                {/* numbers */}
                {item.mobileNumbers.map((number) => (
                  <span className="Lato text-[15px] font-[500] text-[#292929]">
                    {number}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex-[3]">
          {/* title */}
          <div>
            <span className="Lato text-[18px] font-[700]">Ordered Product</span>
          </div>

          {/* product details */}
          <div className="flex flex-col gap-[10px]">
            {/* title */}
            <div className="flex items-center gap-[20px]">
              <div>
                <span className="text-[15px] font-[400] text-[#292929]">
                  Title
                </span>
              </div>
              <div>
                <span className="text-[17px] font-[700] text-[#292929]">
                  {item.productTitle}
                </span>
              </div>
            </div>

            {/* product ID */}
            <div className="flex items-center gap-[20px]">
              <div>
                <span className="text-[15px] font-[400] text-[#292929]">
                  Product ID
                </span>
              </div>
              <div>
                <span className="text-[17px] font-[700] text-[#292929]">
                  {item.productId}
                </span>
              </div>
            </div>

            {/* quantity */}
            <div className="flex items-center gap-[20px]">
              <div>
                <span className="text-[15px] font-[400] text-[#292929]">
                  Quantity
                </span>
              </div>
              <div>
                <span className="text-[17px] font-[700] text-[#292929]">
                  {item.quantity}
                </span>
              </div>
            </div>

            {/* payment type */}
            <div className="flex items-center gap-[20px]">
              <div>
                <span className="text-[15px] font-[400] text-[#292929]">
                  Payment Type
                </span>
              </div>
              <div>
                <span className="text-[17px] font-[700] text-[#292929]">
                  {item.paymentType}
                </span>
              </div>
            </div>

            {/* price */}
            <div className="flex items-center gap-[20px]">
              <div>
                <span className="text-[15px] font-[400] text-[#292929]">
                  Price
                </span>
              </div>
              <div>
                <span className="text-[17px] font-[700] text-[#292929]">
                  {item.price} LKR
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-[5] flex flex-col gap-[20px] items-center justify-center">
          <div className="bg-[#F05206] text-white py-[10px] w-[250px] rounded-full cursor-pointer hover:bg-[#f03d06] flex items-center justify-center  ">
            <span>Recieve Order</span>
          </div>
          <div className="bg-white text-black py-[10px]  rounded-full cursor-pointer hover:bg-gray-50 flex items-center justify-center w-[250px] ">
            <span>Order Send</span>
          </div>
          <div className="bg-[#20990C] text-white py-[10px] rounded-full cursor-pointer hover:bg-[#20860e] flex items-center justify-center w-[250px] ">
            <span>Recieve Order</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
