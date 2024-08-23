import React from "react";
import { LuLayoutDashboard } from "react-icons/lu";
import { RiShoppingBag3Line } from "react-icons/ri";
import { ImUpload } from "react-icons/im";
import { TbTransform } from "react-icons/tb";
import { LuShoppingBasket } from "react-icons/lu";
import { BsPerson } from "react-icons/bs";
import { CiDeliveryTruck } from "react-icons/ci";
import { PiNotePencilBold } from "react-icons/pi";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { CiLogout } from "react-icons/ci";
import { MdLocalOffer } from "react-icons/md";
import { BiCategory } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { logout } from "../../../../app/features/userSlice";
import { RiCoupon3Line } from "react-icons/ri";

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <div className=" bg-white admin-sidebar h-full pt-[20px] px-[20px] pb-[50px] flex flex-col justify-between shadow-sm">
      {/* top */}
      <div>
        {/* logo */}
        <Link to={"/"} className="flex justify-center">
          <span className="text-[19px]  Nu uppercase font-[800] text-[#111]">
            Artystry Handmade
          </span>
        </Link>

        <NavLink
          to={"/admin/home"}
          className="flex items-center gap-[7px]  p-[10px]   cursor-pointer hover:bg-gray-100 rounded-lg mt-[30px] text-[#808191] font-[600]"
        >
          <LuLayoutDashboard className="text-[18px]" />
          <div>
            <span className="text-[16px] Man">Dashboard</span>
          </div>
        </NavLink>

        <div className="mt-[40px] flex flex-col gap-[15px] font-[600]">
          <NavLink
            to={"/admin/uploadProducts"}
            className="flex items-center gap-[7px]  p-[10px] cursor-pointer hover:bg-gray-100 rounded-lg text-[#808191] "
          >
            <ImUpload className="text-[18px]" />
            <div>
              <span className="text-[16px] Man">Upload Products</span>
            </div>
          </NavLink>

          <NavLink
            to={"/admin/categories"}
            className="flex items-center gap-[7px]  p-[10px] cursor-pointer hover:bg-gray-100 rounded-lg text-[#808191] "
          >
            <BiCategory className="text-[18px]" />
            <div>
              <span className="text-[16px] Man">Categories</span>
            </div>
          </NavLink>

          <NavLink
            to={"/admin/products"}
            className="flex items-center gap-[7px]  p-[10px] cursor-pointer hover:bg-gray-100 rounded-lg text-[#808191] "
          >
            <LuShoppingBasket className="text-[18px]" />
            <div>
              <span className="text-[16px] Man"> Products</span>
            </div>
          </NavLink>

          <NavLink
            to={"/admin/addcoupon"}
            className="flex items-center gap-[7px]  p-[10px] cursor-pointer hover:bg-gray-100 rounded-lg text-[#808191] "
          >
            <RiCoupon3Line className="text-[18px]" />
            <div>
              <span className="text-[16px] Man">Add Coupon</span>
            </div>
          </NavLink>

          <NavLink
            to={"/admin/customers"}
            className="flex items-center gap-[7px]  p-[10px] cursor-pointer hover:bg-gray-100 rounded-lg text-[#808191] "
          >
            <BsPerson className="text-[18px]" />
            <div>
              <span className="text-[16px] Man">Customers</span>
            </div>
          </NavLink>
        </div>
      </div>

      {/* bottom */}
      <div>
        <div
          className="flex items-center gap-[7px]  p-[10px] cursor-pointer hover:bg-gray-100 rounded-lg text-[#808191] font-[600] "
          onClick={() => logoutHandler()}
        >
          <CiLogout className="text-[18px]" />
          <span className="text-[16px] Man">Logout</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
