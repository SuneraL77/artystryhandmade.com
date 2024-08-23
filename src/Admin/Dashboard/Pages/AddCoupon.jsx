import React, { useEffect, useState } from "react";
import Sidebar from "../Components/Sidebar/Sidebar";
import toast, { Toaster } from "react-hot-toast";
import SingleCouponCard from "../Components/SingleCouponCard/SingleCouponCard";
import { createCoupen, deleteCoupen, getAllCoupens } from "../../../functions/coupen";
import { useSelector } from "react-redux";


const AddCoupon = () => {
  const [coupens, setCoupens] = useState([]);
  const [name, setName] = useState("");
  const [expiry, setExpire] = useState("");
  const [discount, setDiscount] = useState("");
  useEffect(() => {
    loadCoupens();
  }, []);

  const { user } = useSelector((state) => state.user);
  const loadCoupens = async () => {
    const response = await getAllCoupens(user.token);
    setCoupens(response);
  };
const submit = async () =>{
  const response =  await createCoupen(name, expiry, discount, user.token);
  toast.success(response.message)
  setName("")
  setExpire("")
  setDiscount("")
  loadCoupens()
}

const deleteC = async (coupenId) =>{
const response = await deleteCoupen(coupenId,user.token);
toast.success(response.message)
loadCoupens()
}

  return (
    <div className="flex h-screen">
      <div className="flex-[2]">
        <Sidebar />
      </div>
      <Toaster />
      <div className="flex-[8] pt-[50px] pl-[30px] pr-[80px] Lato overflow-y-auto">
        {/* title */}
        <div className="flex items-center justify-between">
          <div>
            <span className="Lato text-[22px] font-[700]">Add coupon</span>
          </div>
        </div>

        {/* added coupons */}

        <div className="mt-[20px] w-full flex gap-8 flex-wrap">
          {coupens.map((item) => (
            <SingleCouponCard item={item} key={item._id} deleteC={deleteC} />
          ))}
        </div>

        <div className="mt-[50px] mb-[40px]">
          {/* add coupon */}
          <div className="flex flex-col gap-4 w-[250px]">
      
            <div className="flex flex-col gap-1 w-full">
              <div>
                <span className="text-lg font-medium">Coupon Name</span>
              </div>
              <div>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="outline-none border-none bg-gray-200 px-[10px] py-[7px] rounded-lg w-full"
                />
              </div>
            </div>

            {/* coupon expire date */}
            <div className="flex flex-col w-full gap-1">
              <div>
                <span className="text-lg font-medium">Coupon Expire Date</span>
              </div>
              <div>
                <input
                  type="date"
                  value={expiry}
                  onChange={(e) => setExpire(e.target.value)}
                  className="outline-none border-none bg-gray-200 px-[10px] py-[7px] rounded-lg w-full"
                />
              </div>
            </div>

            {/* discount */}
            <div className="flex flex-col w-full gap-1">
              <div>
                <span className="text-lg font-medium">Discount</span>
              </div>
              <div>
                <input
                  type="text"
                  value={discount}
                  onChange={(e) => setDiscount(e.target.value)}
                  className="outline-none border-none bg-gray-200 px-[10px] py-[7px] rounded-lg w-full"
                />
              </div>
            </div>

            {/* button */}
            <div className="mt-[25px]">
              <button className="bg-black hover:bg-black/90 text-white px-[20px] py-[7px] rounded-lg" onClick={() => submit()}>
                Add Coupon
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCoupon;
