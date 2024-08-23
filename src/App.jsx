import React, { useEffect, useState } from "react";
import Routees from "./Routes/Routees";
import { useLocation } from "react-router-dom";
import Loading from "./Components/Loading/Loading";
import { Toaster } from "react-hot-toast";

const App = () => {
  const ScrollToTop = () => {
    const { pathname } = useLocation();

    React.useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="">
      <Toaster />
      <ScrollToTop />
      {loading ? <Loading /> : <Routees />}
    </div>
  );
};

export default App;
