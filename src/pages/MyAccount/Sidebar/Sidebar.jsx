import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import noProfile from "../../../assets/noProfile.jpg";
import { IoMdLogOut } from "react-icons/io";
import { MdAccountCircle } from "react-icons/md";
import { MdHistory } from "react-icons/md";
import { MdDeliveryDining } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../app/features/userSlice";

const Sidebar = () => {
  const [profilePic, setProfilePic] = useState(noProfile);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    dispatch(logout());
    navigate("/");
  };

  const { user } = useSelector((state) => state.user);

  return (
    <div className="w-full h-full bg-black text-white">
      {/* top */}
      <div className="border-b-[1px] border-solid border-gray-50/20 pb-[10px]">
        {/* profile image | name */}
        <div className="flex items-center justify-between gap-[25px]">
          <div className="flex items-center gap-[15px]">
            {/* profile img */}
            <div className="w-[50px] h-[50px] rounded-full overflow-hidden border-[1px] border-solid border-gray-50">
              <img
                src={`${profilePic.length === 0 ? noProfile : profilePic}`}
                alt="profileImg"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:w-[150px] whitespace-nowrap overflow-hidden text-ellipsis">
              <span className="Nu text-[18px] w-full ">
                {user.first_name} {user.last_name}
              </span>
            </div>
          </div>

          {/* logout btn */}
          <div
            onClick={logoutHandler}
            className="flex items-center gap-[5px] cursor-pointer"
          >
            <span className="text-[15px]">Logout</span>
            <IoMdLogOut className="text-[25px] " />
          </div>
        </div>
      </div>

      {/* links */}
      <div className="myaccount w-full mt-[50px] flex md:flex-col flex-row md:gap-[40px] gap-[25px] justify-center items-start">
        {/* account details */}
        <div>
          <NavLink
            to={"/user/myAccount/accountdetails"}
            className="Nu uppercase tracking-[2px] font-[600] md:block hidden text-white hover:text-gray-200"
          >
            Account Details
          </NavLink>

          <div
            className={`mobileLink md:hidden${
              location.pathname === "/myAccount/accountdetails" ? " active" : ""
            }`}
          >
            <NavLink to={"/user/myAccount/accountdetails"}>
              <MdAccountCircle className="text-[35px]" />
            </NavLink>
          </div>
        </div>

        {/* order history */}
        <div>
          <NavLink
            to={"/user/myAccount/orderhistory"}
            className="Nu uppercase tracking-[2px] font-[600] md:block hidden text-white hover:text-gray-200"
          >
            Order history
          </NavLink>

          <div
            className={`mobileLink md:hidden${
              location.pathname === "/myAccount/orderhistory" ? " active" : ""
            }`}
          >
            <NavLink to={"/user/myAccount/orderhistory"}>
              <MdHistory className="text-[35px]" />
            </NavLink>
          </div>
        </div>

        {/* order history */}
        <div>
          <NavLink
            to={"/user/myAccount/ongoingorders"}
            className="Nu uppercase tracking-[2px] font-[600] md:block hidden text-white hover:text-gray-200"
          >
            Ongoing orders
          </NavLink>

          <div
            className={`mobileLink md:hidden${
              location.pathname === "/myAccount/ongoingorders" ? " active" : ""
            }`}
          >
            <NavLink to={"/user/myAccount/ongoingorders"}>
              <MdDeliveryDining className="text-[35px]" />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
