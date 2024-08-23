import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Cart from "../pages/Cart/Cart";
import Wishlist from "../pages/Wishlist/Wishlist";
import Shop from "../pages/Shop/Shop";
import PageNotFound from "../pages/PageNotFound/PageNotFound";
import SingleProduct from "../Components/SingleProduct/SingleProduct";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import AccountDetails from "../pages/MyAccount/AccountDetails/AccountDetails";
import OrderHistory from "../pages/MyAccount/OrderHistory/OrderHistory";
import OngoingOrders from "../pages/MyAccount/OngoingOrders/OngoingOrders";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import OrderSuccess from "../pages/OrderSuccess/OrderSuccess";
import OrderError from "../pages/OrderError/OrderError";

import TermsAndCondition from "../pages/TermsAndConditions/TermsAndCondition";
import AdminHome from "../Admin/Dashboard/Pages/Home";
import SoldItems from "../Admin/Dashboard/Pages/SoldItems";
import UploadProducts from "../Admin/Dashboard/Pages/UploadProducts";
import Transactions from "../Admin/Dashboard/Pages/Transactions";
import Customers from "../Admin/Dashboard/Pages/Customers";
import DeliveringProducts from "../Admin/Dashboard/Pages/DeliveringProducts";
import Orders from "../Admin/Dashboard/Pages/Orders";
import AdminProducts from "../Admin/Dashboard/Pages/Products";
import AdminCategories from "../Admin/Dashboard/Pages/Categories/Categories";
import UPDProduct from "../Admin/Dashboard/Pages/UpdateProduct/UPDProduct";
import OneCategory from "../pages/OneCategory/OneCategory";
import CheckoutPage from "../pages/Checkout/CheckoutPage";

import AddCoupon from "../Admin/Dashboard/Pages/AddCoupon";
import AdminRoute from "../Components/Routes/AdminRoutes";
import UserRoute from "../Components/Routes/UserRoutes";
import PrivacyPolicy from "../pages/PrivacyPolicy/PrivacyPolicy";

const Routees = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="user" element={<UserRoute />}>
          <Route path="cart" element={<Cart />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="myAccount">
            <Route path="accountdetails" element={<AccountDetails />} index />
            <Route path="orderhistory" element={<OrderHistory />} />
            <Route path="ongoingorders" element={<OngoingOrders />} />
          </Route>
          <Route path="checkout" element={<CheckoutPage />} />
        </Route>
        <Route path="shop" element={<Shop />} />
        <Route path="product/:slug" element={<SingleProduct />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="category/:slug" element={<OneCategory />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="order/success" element={<OrderSuccess />} />
        <Route path="order/unsuccess" element={<OrderError />} />
        <Route path="termsAndConditions" element={<TermsAndCondition />} />
        <Route path="privacyPolicy" element={<PrivacyPolicy />} />

        {/* admin panel routings */}
        <Route path="admin" element={<AdminRoute />}>
          <Route path="home" element={<AdminHome />} index />
          <Route path="uploadProducts" element={<UploadProducts />} />
          <Route path="updateproduct/:slug" element={<UPDProduct />} />
          <Route path="categories" element={<AdminCategories />} />
          <Route path="customers" element={<Customers />} />
          <Route path="products" element={<AdminProducts />} />
          <Route path="addcoupon" element={<AddCoupon />} />
        </Route>

        <Route path="*" element={<PageNotFound />} index />
      </Routes>
    </div>
  );
};

export default Routees;
