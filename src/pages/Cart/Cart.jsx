import React, { useEffect, useState } from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import CartCard from "../../Components/CartCard/CartCard";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { addtocart } from "../../functions/cart";
import toast from "react-hot-toast";
import { ClipLoader } from "react-spinners";

const Cart = () => {
  const [loading, setLoading] = useState(false);
  const [counrtCode, setCounrtyCode] = useState("");

  const { cart, user } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    getGeoInfo();
  }, []);

  const getGeoInfo = () => {
    axios
      .get("https://ipapi.co/json/")
      .then((response) => {
        let data = response.data;
        setCounrtyCode(data.currency);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const navigate = useNavigate();
  const getTotal = () => {
    return cart.reduce((total, item) => {
      let prices = item.prices;
      let filteredPrices = prices.filter((price) =>
        counrtCode === "LKR"
          ? price.currency === "LKR"
          : price.currency === "USD"
      );
      let price = filteredPrices.length > 0 ? filteredPrices[0].price : 0;
      let discountedPrice = Math.round(price - (price * item.discount) / 100);
      return total + discountedPrice * item.count;
    }, 0);
  };

  const saveToCartDb = async () => {
    const response = await addtocart(user?.user?.token, cart);
    setLoading(true);
    if ((response.message = "cart added success")) {
      navigate("/user/checkout");
      return toast.success(response.message);
    }
    setLoading(false);
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
      <div className="md:px-[50px] px-[20px] mt-[50px] mb-[100px] lg:mb-[150px]">
        {/* title */}
        <div className="mb-[50px] flex items-center gap-[10px]">
          <div className="w-[6px] h-[25px] bg-black"></div>
          <h1 className="text-[20px] font-[700] text-gray-900 As uppercase tracking-[4px]">
            Cart
          </h1>
        </div>

        {cart.length === 0 ? (
          <div className="flex items-center justify-center">
            <span className="Nu text-[18px] font-[500]">
              Your Cart is Empty
            </span>{" "}
          </div>
        ) : (
          <div>
            {/* cart items */}
            <div>
              {/* top */}
              <div className="flex ">
                <div className="flex-[3]">
                  <div>
                    <span className="Nu font-[600] text-[16px] tracking-[5px]">
                      PRODUCT
                    </span>
                  </div>
                </div>
                <div className="flex-[1]">
                  <div>
                    <span className="Nu font-[600] text-[16px] tracking-[5px]">
                      QUANTITY
                    </span>
                  </div>
                </div>
                <div className="flex-[1] flex items-end justify-end">
                  <div>
                    <span className="Nu font-[600] text-[16px] tracking-[5px]">
                      TOTAL
                    </span>
                  </div>
                </div>
              </div>

              {/* cart cards */}
              <div className="flex flex-col gap-4  py-[20px] mt-6  border-y-gray-200 border-solid border-y-[1px]">
                {cart.map((p) => (
                  <CartCard p={p} />
                ))}
              </div>
            </div>

            {/* estimated total */}
            <div className="flex justify-end items-end mt-8">
              <div>
                <div className=" w-[400px] md:p-[15px] p-[5px] px-[25px] ">
                  <div className="flex mb-[15px] md:flex-row flex-col items-center md:justify-between">
                    <div>
                      <span className="uppercase As font-[600] text-[18px] tracking-[2px]">
                        Estimated total
                      </span>
                    </div>
                    <div>
                      <span className="uppercase As font-[600] text-[18px] tracking-[2px]">
                        {counrtCode} {getTotal()}
                      </span>
                    </div>
                  </div>

                  {/* subtotal */}
                  <div>
                    <div className="my-[15px]">
                      {/* sub */}

                      {/* shipping cost */}

                      {cart.map((p) => (
                        <div className="flex md:flex-row flex-col items-center md:justify-between">
                          <div className="">
                            <span className="Mont text-[13px] font-[600] text-gray-600 tracking-[1px] uppercase">
                              {p.title}
                            </span>
                          </div>
                          <div className="Mont text-[13px] font-[600] text-gray-600">
                            {p.count}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* checkout button */}
                  <div className="w-full mt-[25px] border-b-[3px] border-solid border-black pb-[25px]">
                    <button
                      className="button w-[100%] Nu"
                      onClick={() => saveToCartDb()}
                    >
                      {loading ? (
                        <ClipLoader className="bg-slate-300" />
                      ) : (
                        "Checkout"
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* footer */}
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Cart;
