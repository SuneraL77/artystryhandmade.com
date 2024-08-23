import React, { useEffect, useState } from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import CheckoutDetails from "./CheckoutDetails";
import OrderSummery from "./OrderSummery";
import { gettocart } from "../../functions/cart";
import { useSelector } from "react-redux";
import { payHereSubmit } from "../../functions/payher";
import toast from "react-hot-toast";
import { getUserAdress, updateUseraddress } from "../../functions/oreder";
import { Country, State } from "country-state-city";
const CheckoutPage = () => {
  const [products, setProducts] = useState([]);
  const [countryCode, setCounrtyCode] = useState("");

  useEffect(() => {
    loadPorduct();
  }, []);
  const { user } = useSelector((state) => state.user);
  const loadPorduct = async () => {
    const response = await gettocart(user.token);
    console.log(response);
    setProducts(response);
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.payhere.lk/lib/payhere.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  useEffect(() => {
    if (window.payhere) {
      window.payhere.onCompleted = function onCompleted(orderId) {
        console.log("Payment completed. OrderID:" + orderId);
        // Note: validate the payment and show success or failure page to the customer
      };

      window.payhere.onDismissed = function onDismissed() {
        // Note: Prompt user to pay again or show an error page
        console.log("Payment dismissed");
      };

      window.payhere.onError = function onError(error) {
        // Note: show an error page
        console.log("Error:" + error);
      };
    }
  }, []);

  const handlePayment = async () => {
    const address = {
      firstname: firstName,
      lastname: lastName,
      mobile: phoneNumber1,
      mobile1: phoneNumber2,
      country: country,
      state: state,
      line1: line1,
      line2: line2,
      postalcode: pcode,
    };
    console.log(address);
    setLoading(true);
    await updateUseraddress(user.token, address);
    setLoading(false);
    getOldAddress();

    if (window.payhere) {
      const response = await payHereSubmit(user.token, countryCode);
      console.log(response);
      const payment = {
        merchant_id:"1221451",
        return_url: response.return_url,
        cancel_url: response.cancel_url,
        notify_url: response.notify_url,
        order_id: response.order_id,
        items: "bangs",
        amount: response.amount,
        currency: response.currency,
        hash: response.hash, // Replace with generated hash retrieved from backend
        first_name: response.first_name,
        last_name: response.last_name,
        email: response.email,
        phone: response.mobile1,
        address: response.address,
        city: response.city,
        country: "Sri Lanka",
        delivery_address: "No. 46, Galle road, Kalutara South",
        delivery_city: "Kalutara",
        delivery_country: "Sri Lanka",
        custom_1: "",
        custom_2: "",
      };
      window.payhere.startPayment(payment);
    }
  };
  const [firstName, setFirstName] = useState("");
  const [loading, setLoading] = useState(false);
  const [lastName, setLastName] = useState("");
  const [phoneNumber1, setPhoneNumber1] = useState("");
  const [phoneNumber2, setPhoneNumber2] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [line1, setLine1] = useState("");
  const [line2, setLine2] = useState("");
  const [cname, setCname] = useState("");
  const [state, setState] = useState("");
  const [pcode, setPcode] = useState("");
  useEffect(() => {
    getOldAddress();
  }, []);
  const getContry = async (countryCode) => {
    const selectedCountry = await Country.getCountryByCode(countryCode);
    setCname(selectedCountry.name);
  };
  const submitHnadler = async () => {};

  const getOldAddress = async () => {
    setLoading(true);
    const response = await getUserAdress(user.token);
    console.log("address =>", response);
    setCity(response.city);
    setLine1(response.line1);
    setLine2(response.line2);
    setPhoneNumber1(response.mobile);
    setPhoneNumber2(response.mobile1);

    setState(response.state);
    setCountry(response.country);
    setFirstName(response.fname);
    setLastName(response.lastName);
    await getContry(response.country);
  };
  return (
    <div>
      {/* header */}
      <div className="sticky top-0 w-full z-[100000]">
        <div>
          <Header />
        </div>
      </div>

      {/* content */}
      <div className="flex flex-col md:px-[100px] px-[10px] mt-[50px] mb-[50px] ">
        <div className="mb-[50px] flex items-center gap-[10px]">
          <div className="w-[6px] h-[25px] bg-black"></div>
          <h1 className="text-[20px] font-[700] text-gray-900 As uppercase tracking-[4px]">
            Confirm Order & Checkout
          </h1>
        </div>

        <div className="flex md:flex-row flex-col md:gap-[100px] gap-[50px]">
          <div className="flex-[2] h-full w-full">
            <CheckoutDetails
              firstName={firstName}
              setFirstName={setFirstName}
              lastName={lastName}
              setLastName={setLastName}
              phoneNumber1={phoneNumber1}
              setPhoneNumber1={setPhoneNumber1}
              phoneNumber2={phoneNumber2}
              setPhoneNumber2={setPhoneNumber2}
              city={city}
              setCity={setCity}
              line1={line1}
              setLine1={setLine1}
              line2={line2}
              setLine2={setLine2}
              cname={cname}
              setCname={setCname}
              pcode={pcode}
              setPcode={setPcode}
              setCountry={setCountry}
              country={country}
              state={state}
              setState={setState}
            />
          </div>
          <div className="flex-[1]">
            <OrderSummery
              products={products}
              counrtCode={countryCode}
              setCounrtyCode={setCounrtyCode}
              handlePayment={handlePayment}
            />
          </div>
        </div>
      </div>

      {/* footer */}
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default CheckoutPage;
