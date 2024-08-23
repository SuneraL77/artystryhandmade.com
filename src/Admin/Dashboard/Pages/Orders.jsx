import React from "react";
import Sidebar from "../Components/Sidebar/Sidebar";
import OrderCard from "../Components/OrderCard/OrderCard";
import { orderData } from "../Components/OrderCard/OrderData";

const Orders = () => {
  return (
    <div className="flex h-screen">
      <div className="flex-[2]">
        <Sidebar />
      </div>
      <div className="flex-[8] pt-[50px] pl-[30px] pr-[80px] Lato overflow-y-auto">
        {/* title */}
        <div>
          <div>
            <span className="Lato text-[22px] font-[700]">Orders</span>
          </div>
        </div>

        {/* orders */}
        <div className="mb-[40px]">
          {orderData.map((item) => (
            <OrderCard item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Orders;
