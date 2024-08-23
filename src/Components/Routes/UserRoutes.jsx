import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Loading from "../Loading/Loading";

const UserRoute = ({ children, ...rest }) => {
  const { user } = useSelector((state) => state.user);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user.token) {
      setLoading(false);
    }
  }, [user]);

  if (loading) {
    return <Loading />;
  }

  return <Outlet />;
};

export default UserRoute;
