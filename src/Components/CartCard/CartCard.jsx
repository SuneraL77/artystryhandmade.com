import axios from "axios";
import React, { useState, useEffect, useCallback } from "react";
import toast from "react-hot-toast";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";

const CartCard = ({ p }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState("");
  const limit = p.quantity - p.sold;
  const [counrtCode, setCounrtyCode] = useState("LKR");
  console.log(counrtCode);
  useEffect(() => {
    getGeoInfo();
    loadPrice();
  }, []);

  const increaseQuantity = () => {
    setQuantity(quantity === limit ? quantity : quantity + 1);
    handleQuantityChange(quantity);
  };

  const decreaseQuantity = () => {
    setQuantity(quantity === 1 ? quantity : quantity - 1);
    handleQuantityChange(quantity);
  };

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
  const loadPrice = useCallback(async () => {
    let Prices = [];
    if (counrtCode === "LKR") {
      Prices = p.prices.filter((price) => price.currency === "LKR");
    } else {
      Prices = p.prices.filter((price) => price.currency === "USD");
    }
    Prices.map((p) => setPrice(p.price));
  }, []);

  const handleRemove = () => {
    // console.log(p._id, "to remove");
    let cart = [];

    if (typeof window !== "undefined") {
      if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart"));
      }
      // [1,2,3,4,5]
      cart.map((product, i) => {
        if (product._id === p._id) {
          cart.splice(i, 1);
        }
      });

      localStorage.setItem("cart", JSON.stringify(cart));
      dispatch({
        type: "ADD_TO_CART",
        payload: cart,
      });
    }
  };
  const discountedPrice = Math.round(price - (price * p.discount) / 100);

  const handleQuantityChange = (quantity) => {
    console.log(quantity);

    if (quantity > p.quantity - p.sold) {
      toast.error(`Max available quantity: ${p.quantity - p.sold}`);
      return;
    }

    let cart = [];

    if (typeof window !== "undefined") {
      if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart"));
      }

      cart.map((product, i) => {
        if (product._id == p._id) {
          cart[i].count = quantity;
          console.log(cart[i].count);
        }
      });

      localStorage.setItem("cart", JSON.stringify(cart));
      dispatch({
        type: "ADD_TO_CART",
        payload: cart,
      });
    }
  };

  return (
    <div className="flex w-full h-[250px]  items-center">
      {/* product details */}
      <div className="flex-[3]">
        <div className="flex items-center">
          <div className="flex-[1]">
            <img
              src={p.images[0].imageUrl}
              alt="productImg"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-[3]">
            <div className="max-w-[300px] whitespace-nowrap overflow-hidden text-ellipsis">
              <span className="Mont uppercase cursor-pointer tracking-[2px] text-[14px] font-[500]">
                {p.title}
              </span>
            </div>
            <div>
              <span className="Nu text-[18px] font-[600] line-through text-gray-500">
                {counrtCode === "LKR"
                  ? `       LKR. ${price}.00`
                  : `       USD. ${price}.00`}
              </span>
            </div>
            <div>
              <span className="Nu text-[23px] font-[600]">
                {counrtCode === "LKR"
                  ? `LKR. ${discountedPrice}`
                  : `USD . ${discountedPrice}`}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* quantity | delete */}
      <div className="flex-[1] flex items-center gap-10">
        {/* quantity */}
        <div className="flex gap-[20px] items-center border-black p-[4px] border-solid border-[1px]">
          <div
            className=" py-[7px] px-[15px] cursor-pointer  flex items-center justify-center text-center"
            onClick={decreaseQuantity}
          >
            -
          </div>
          <div className="Nu font-[600]">{quantity}</div>
          <div
            className=" py-[7px] px-[15px] cursor-pointer  flex items-center justify-center text-center"
            onClick={increaseQuantity}
          >
            +
          </div>
        </div>

        {/* delete */}
        <div>
          <div>
            <div>
              <MdDelete
                className="text-black text-[30px] cursor-pointer hover:text-black/80 w-fit"
                onClick={handleRemove}
              />
            </div>
          </div>
        </div>
      </div>

      {/* total */}
      <div className="flex-[1] flex items-end justify-end">
        <div>
          <span className="Nu text-[23px] font-[600]">
            {counrtCode === "LKR"
              ? `LKR. ${discountedPrice}`
              : `USD . ${discountedPrice}`}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
