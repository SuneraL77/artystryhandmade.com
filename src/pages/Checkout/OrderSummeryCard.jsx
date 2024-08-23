import React, { useEffect, useState } from "react";
import axios from "axios";

const OrderSummeryCard = ({products}) => {
  const [price, setPrice] = useState("");
  const [counrtCode, setCounrtyCode] = useState("LKR");
 useEffect(() =>{
getGeoInfo()
 },[])
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

  const loadPrice = (prices) => {
    let totalPrice = "";
    if (counrtCode === "LKR") {
      totalPrice = prices.find((price) => price.currency === "LKR")?.price;
    } else {
      totalPrice = prices.find((price) => price.currency === "USD")?.price;
    }
    return totalPrice
  };

  return (
    <>
    {products.map((p) =>(

    <div className="flex items-center gap-[10px]">
      <div className="w-[100px] h-[100px] bg-gray-200">
        <img src={p.images[0].imageUrl} alt="wallet" className="w-full h-full object-cover" />
      </div>
      <div className="text-gray-500 flex flex-col gap-[10px]">
        <div className="flex items-center gap-[50px]">
          {/* product name */}
          <div>
            <span className="Nu text-[16px] font-[600]">{p.title}</span>
          </div>

          {/* quantity */}
          <div>
            <span>x{p.count}</span>
          </div>
        </div>
        <div>
          {/* weight */}
      

          {/* price */}
          <div>
            <span className="Nu text-[16px] font-[600]">{counrtCode}{" "}{loadPrice(p.prices) - loadPrice(p.prices)*p.discount/100}</span>
          </div>
        </div>
      </div>
    </div>
          
        ))}
        </>
  );
};

export default OrderSummeryCard;
