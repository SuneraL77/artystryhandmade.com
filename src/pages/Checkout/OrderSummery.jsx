import React, { useEffect, useState } from "react";
import OrderSummeryCard from "./OrderSummeryCard";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const OrderSummery = ({products,counrtCode,setCounrtyCode,handlePayment}) => {
  

  
  useEffect(() =>{
    getGeoInfo()
  },[]);
  const getGeoInfo = () => {
    axios
      .get("https://ipapi.co/json/")
      .then((response) => {
        let data = response.data;
        setCounrtyCode(data.currency);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const getTotal = () => {
    return products.reduce((total, item) => {
      let prices = item.prices;
      let filteredPrices = prices.filter((price) =>
        counrtCode === "LKR" ? price.currency === "LKR" : price.currency === "USD"
      );
      let price = filteredPrices.length > 0 ? filteredPrices[0].price : 0;
      let discountedPrice = Math.round(price - (price * item.discount) / 100);
      return total + discountedPrice * item.count;
    }, 0);
  };
  const navigate = useNavigate();
  return (
    <div>
      {/* title */}
      <div className="pb-[10px] border-b-[1px] border-solid border-gray-300">
        <div>
          <span className="Nu text-[20px] font-[700]">Order Summary</span>
        </div>
      </div>
      <div className="mt-[20px] flex flex-col gap-[20px]">
        <OrderSummeryCard products={products} />
      </div>
      <div className="flex flex-col gap-[10px] mt-[20px] border-solid border-gray-300 border-t-[1px]">
        {/* total */}
        <div className="flex items-center justify-between  pt-[10px]">
          <div>
            <span className="Nu text-[16px] font-[600]">Total</span>
          </div>
          <div>
            <span className="Nu text-[16px] font-[600]">{counrtCode}{"."}{getTotal()}</span>
          </div>
        </div>

        {/* shopping fee */}
        <div className="flex items-center justify-between">
          <div>
            <span className="Nu text-[16px] font-[600]">Shipping fee</span>
          </div>
          <div>
            <span className="Nu text-[16px] font-[600]">0</span>
          </div>
        </div>

        {/* grand total */}
        <div className="flex items-center justify-between  pt-[10px]">
          <div>
            <span className="Nu text-[17px] font-[700]">Grand Total</span>
          </div>
          <div>
            <span className="Nu text-[17px] font-[700]">{counrtCode}{"."}{getTotal()}</span>
          </div>
        </div>
      </div>
      <div className="mt-[25px]">
        <div className="bg-black hover:bg-black/90 py-[10px] px-[20px] w-full flex items-center justify-center cursor-pointer">
          <button className="Nu uppercase text-white text-[15px]" onClick={() =>handlePayment()}>
            Place Your Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderSummery;
