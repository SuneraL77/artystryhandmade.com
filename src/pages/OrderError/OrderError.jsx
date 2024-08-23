import React from "react";
import animation from "../../assets/ordererror.json";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";

const OrderError = () => {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen justify-center items-center mb-[50px]">
      <div className="flex flex-col items-center">
        <div>
          <Lottie animationData={animation} className="w-[300px]" />
        </div>

        <div className="md:mt-[25px]">
          <span className="md:text-[30px]  text-[18px] text-center flex Nu uppercase font-[700] tracking-[2px]">
            OOPS! Something went wrong
          </span>
        </div>

        <div className="md:px-[400px] px-[20px] flex items-center text-center mt-[10px]">
          <span className="Nu text-[16px] font-[600] text-gray-500">
            "Oops! Something went wrong with your order. Don't worry, we're on
            it. Please try again or contact support at John Leather Craft."
          </span>
        </div>

        <div className="mt-[25px]">
          <button className="button" onClick={() => navigate("/")}>
            Go back to home
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderError;
