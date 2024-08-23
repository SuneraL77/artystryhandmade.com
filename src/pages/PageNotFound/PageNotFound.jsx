import React from "react";
import animation from "../../assets/pagenotfoundanim.json";
import Lottie from "lottie-react";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center h-screen w-full mb-[50px]">
      <div className="flex flex-col items-center">
        <Lottie animationData={animation} className="w-[500px]" />
        <div className="flex flex-col items-center">
          <span className="Nu text-[50px] font-[700]">404</span>
          <span className="Nu md:text-[40px] text-[25px] font-[600] uppercase tracking-[4px]">
            Page Not Found
          </span>
          <div>
            <button className="button mt-[20px]" onClick={() => navigate("/")}>
              Back to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
