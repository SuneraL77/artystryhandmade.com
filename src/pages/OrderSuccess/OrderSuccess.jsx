import Lottie from "lottie-react";
import React from "react";
import animation from "../../assets/ordersuccess.json";
import { useNavigate } from "react-router-dom";

const OrderSuccess = () => {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="flex flex-col items-center">
        <div>
          <Lottie animationData={animation} className="w-[200px]" />
        </div>

        <div className="mt-[10px]">
          <span className="md:text-[30px]  text-[20px] text-center flex Nu uppercase font-[700] tracking-[2px]">
            Thank you for ordering
          </span>
        </div>

        <div className="md:px-[400px] px-[20px] flex items-center text-center mt-[10px]">
          <span className="Nu text-[16px] font-[600] text-gray-500">
            "Congratulations on your order success! Welcome to John Leather
            Craft. Your handmade masterpiece is on its way. Stay tuned for
            updates!"
          </span>
        </div>

        <div className="mt-[25px]">
          <button className="button" onClick={() => navigate("/shop")}>
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;
