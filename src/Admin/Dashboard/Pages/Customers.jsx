import React, { useEffect, useState } from "react";
import Sidebar from "../Components/Sidebar/Sidebar";
import { FiSearch } from "react-icons/fi";
import CustomersTable from "../Components/Table/Tables/CustomersTable";
import {
  changeUserRole,
  getUserCount,
  getUsers,
} from "../../../functions/admin";
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import moment from "moment";

const Customers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [userCount, setUserCount] = useState(0);

  const { user } = useSelector((state) => state.user);

  const currentDate = moment().format("DD MMM, YYYY");

  useEffect(() => {
    loadAllUsers();
    getUserCount().then((res) => setUserCount(res));
  }, [page]);

  const loadAllUsers = async () => {
    setLoading(true);
    const response = await getUsers("creatAt", "desc", page);
    setUsers(response);
    setLoading(false);
  };

  const pageCount = Math.ceil(userCount / 6);

  const handleUser = async (userId, role) => {
    await changeUserRole(userId, role, user.token);
    toast.success(`Upadetd this user ${role}`);
  };

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
            <span className="Lato text-[22px] font-[700]">Customers</span>
          </div>

          {/* date */}
          <div className="p-[7px] text-[16px] text-[#676767]  w-[200px] flex justify-end bg-white rounded-md">
            <span>{currentDate}</span>
          </div>
        </div>

        <div className="mt-[25px] mb-[40px]">
          {/* title | search */}
          <div className="flex items-center justify-between mb-[10px]">
            {/* title */}
            <div>
              <span className="Lato text-[18px] font-[700] text-[#676767]">
                Customers
              </span>
            </div>

            {/* serach */}
            <div>
              <div className="flex bg-[#D9D9D9] w-fit py-[3px] px-[15px] items-center rounded-lg">
                <input
                  type="search"
                  placeholder="Search.."
                  className="bg-transparent outline-none Lato placeholder:text-black/60 placeholder:font-[600] placeholder:text-[14px] w-[240px]"
                />
                <FiSearch className="text-[20px]" />
              </div>
            </div>
          </div>
          <CustomersTable
            users={users}
            page={page}
            setPage={setPage}
            pageCount={pageCount}
            handleUser={handleUser}
          />
        </div>
      </div>
    </div>
  );
};

export default Customers;
