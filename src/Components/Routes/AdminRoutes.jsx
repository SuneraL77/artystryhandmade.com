import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { currentAdmin } from "../../functions/auth";
import Loading from "../Loading/Loading";
import { Outlet } from "react-router-dom";

const AdminRoute = ({ children, ...rest }) => {
  const { user } = useSelector((state) => state.user);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  console.log(isAdmin)

  useEffect(() => {
    const fetchData = async () => {
      if (user && user.token) {
        try {
          const adminData = await currentAdmin(user.token);
          if (adminData) {
            setIsAdmin(true);
          }
        } catch (error) {
          // Handle error
          console.log(error)
        } finally {
          setLoading(false);
        }
      } else {
        setIsAdmin(false);
        setLoading(false);
     
      }
    };

    fetchData();
  }, [user]);

  if (loading) {
    return <Loading />;
  }

  if (isAdmin) {
    return <Outlet/>;
  }

  return null;
};

export default AdminRoute;