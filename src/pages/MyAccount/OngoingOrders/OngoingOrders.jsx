import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Footer from "../../../Components/Footer/Footer";
import Header from "../../../Components/Header/Header";
import OngoingOrderCard from "./OngoingOrderCard";
import { ongoingOrderData } from "./OngoingOrderData";
import { useNavigate } from "react-router-dom";

const OngoingOrders = () => {
  const [orders, setOrders] = useState(ongoingOrderData);

  const navigate = useNavigate();

  return (
    <div>
      {/* header */}
      <div className="sticky top-0 w-full z-[100000]">
        <div className=" w-full">
          <Header />
        </div>
      </div>

      {/* content */}
      <div className="mt-[50px] md:px-[150px] px-[20px] mb-[100px]">
        <div className="flex md:flex-row flex-col w-full md:h-[80vh] ">
          <div className="flex-[1] w-full h-full bg-black p-[25px] text-white">
            <Sidebar />
          </div>
          <div className="flex-[3] bg-gray-100 p-[25px] pt-[50px] Nu flex flex-col gap-[25px] myAc overflow-y-scroll">
            {/* top */}
            <div className="flex md:flex-row flex-col justify-between">
              {/* title */}
              <div className=" mb-[30px] flex items-center gap-[10px]">
                <div className="w-[6px] h-[25px] bg-black"></div>
                <h1 className="md:text-[20px] text-[15px] font-[700] text-gray-900 As uppercase tracking-[5px]">
                  Ongoing Orders{" "}
                  <span className="text-[16px] tracking-normal capitalize">
                    ({orders.length} orders)
                  </span>
                </h1>
              </div>

              <div>
                {/* sort */}
                <div className="flex items-center gap-[10px]">
                  <div>
                    <span className="Nu font-[500]">Sort by:</span>
                  </div>
                  <select
                    name="sort"
                    id="sort"
                    className="Nu p-[5px] border-[1px] border-solid border-black outline-none font-[500] cursor-pointer"
                  >
                    <option value="op1">Latest Orders</option>
                    <option value="op2">Price Low To High</option>
                    <option value="op3">Price High To Low</option>
                    <option value="op4">Oldest Orders</option>
                  </select>
                </div>
              </div>
            </div>

            {/* orders */}
            <div className="flex flex-col gap-[50px]">
              {orders.length > 0 &&
                orders.map((item) => (
                  <OngoingOrderCard item={item} key={item.id} />
                ))}
            </div>

            {orders.length === 0 && (
              <div className="mt-[100px]">
                <div className="flex flex-col justify-center items-center gap-[25px]">
                  <span className="text-[25px] Nu font-[600] text-center flex">
                    Your ongoing orders page is craving some artisanal touch.
                    Let's create masterpieces! You don't have bought anything
                    yet
                  </span>

                  <button className="button" onClick={() => navigate("/shop")}>
                    Explore Now
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* footer */}
      <Footer />
    </div>
  );
};

export default OngoingOrders;
