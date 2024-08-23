import React from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import InputFields from "./InputFields";
import { useParams } from "react-router-dom";

const UPDProduct = () => {
  const { slug } = useParams();

  return (
    <div className="flex h-screen">
      <div className="flex-[2]">
        <Sidebar />
      </div>
      <div className="flex-[8] pt-[50px] pl-[30px] pr-[80px] Lato overflow-y-auto">
        {/* title */}

        <div className="mb-[40px]">
          <InputFields slug={slug} />
        </div>
      </div>
    </div>
  );
};

export default UPDProduct;
