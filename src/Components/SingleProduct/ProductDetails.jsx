import { Rate } from "antd";
import React, { useEffect, useState } from "react";
import { IoHeartSharp } from "react-icons/io5";
import _ from "lodash"
import axios from "axios";
import { FaMale } from "react-icons/fa";
import { FaFemale } from "react-icons/fa";
import { useDispatch } from "react-redux";

const ProductDetails = ({ p }) => {
  const dispatch = useDispatch()
  const [quantity, setQuantity] = useState(1);
  const [counrtCode, setCounrtyCode] = useState("");
  const limit = p.quantity;
  const [price, setPrice] = useState("");
  const increaseQuantity = () => {
    setQuantity(quantity === limit ? quantity : quantity + 1);
  };

  const decreaseQuantity = () => {
    setQuantity(quantity === 1 ? quantity : quantity - 1);
  };

  const [addedToWishlist, setAddedToWishlist] = useState(false);

  const [gender, setGender] = useState(p.gender);

  useEffect(() => {
    getGeoInfo();
    loadPrice();
  }, [counrtCode]);

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

  const loadPrice = () => {
    let Prices = [];
    if (counrtCode == "LKR") {
      Prices = p.prices.filter((price) => price.currency === "LKR");
    } else {
      Prices = p.prices.filter((price) => price.currency === "USD");
    }
    Prices.map((p) => setPrice(p.price));
  };

  const discountedPrice = Math.round(price - (price * p.discount) / 100);



  const handleAddtoCart = () => {
    // craete  cart array
    let cart = [];

    if (typeof window !== "undefined") {
      if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart"));
      }
    }
    // add new product cart
    cart.push({
      ...p,
      count: 1,
    });
    //remove duplicates
    let unique = _.uniqWith(cart, _.isEqual);
    // save to local storge
    localStorage.setItem("cart", JSON.stringify(unique));
    // show tooltip

    // add redux state
    dispatch({
      type: "ADD_TO_CART",
      payload: cart,
    });
  };

  const ratings = p.ratings; // Assuming 'product' is your product object

// Initialize variables for total stars and total ratings
let totalStars = 0;
let totalRatings = 0;

// Calculate total stars and total ratings
ratings.forEach((rating) => {
  totalStars += parseInt(rating.star);
  totalRatings++;
});

// Calculate average star rating
const averageRating = totalStars / totalRatings;

console.log('Average Rating:', averageRating);
  return (
    <div>
      {/* product name | ratings | price */}
      <div className="flex flex-col border-b-[1px] border-solid border-gray-200/60 pb-[25px]">
        {/* product name */}
        <div>
          <span className="Mont md:text-[25px] text-[20px] font-[500] uppercase tracking-[4px]">
            {p.title}
          </span>
        </div>

        {/* ratings */}
        <div className="mt-[15px] flex items-center gap-[10px]">
          <Rate
            disabled
            defaultValue={averageRating}
            allowHalf
            className="flex gap-[0] text-[#ffd000]"
          />
          <div>
            <span className="Nu font-[500] text-gray-400">({p.ratings.length} Reviews)</span>
          </div>
        </div>

        {/* price */}
        <div className="flex items-center gap-[15px] mt-[20px]">
          {/* new */}
          <div>
            <span className="Nu text-[23px] font-[600]">
              {counrtCode === "LKR"
                ? `LKR. ${discountedPrice}`
                : `USD . ${discountedPrice}`}
            </span>
          </div>
          <div>
            <span className="Nu text-[18px] font-[600] line-through text-gray-500">
              {counrtCode === "LKR"
                ? `       LKR. ${price}.00`
                : `       USD. ${price}.00`}
            </span>
          </div>
        </div>
      </div>

      {/* description */}
      <div className="py-[25px] border-b-[1px] border-solid border-gray-200/60">
        <p className="Nu  text-[17px] text-gray-500 font-[600]">
          {p.description}
        </p>
      </div>

      {/* buttons */}
      <div className="border-b-[1px] border-solid border-gray-200/60 pb-[25px]">
        <div className="mt-[25px] flex md:flex-row flex-col  md:items-end items-start gap-[25px]">
          {/* quantity */}
          <div>
            <div className="px-[10px] flex flex-col gap-[10px] mt-[10px]">
              {/* quantity */}
              <div className="flex gap-[10px] items-center">
                <div
                  className="border-gray-300 border-solid border-[1px] py-[7px] px-[15px] cursor-pointer hover:bg-gray-200 flex items-center justify-center text-center"
                  onClick={decreaseQuantity}
                >
                  -
                </div>
                <div className="Nu font-[600]">{quantity}</div>
                <div
                  className="border-gray-300 border-solid border-[1px] py-[7px] px-[15px] cursor-pointer hover:bg-gray-200 flex items-center justify-center text-center"
                  onClick={increaseQuantity}
                >
                  +
                </div>
              </div>
            </div>
          </div>

          {/* gender */}
          <div className="flex items-center gap-[10px]">
            <div
              className={` border-solid border-[1px] py-[7px] px-[10px]  hover:bg-blue-200 flex items-center justify-center text-center ${
                gender === "Male"
                  ? "bg-blue-100 text-blue-600 border-blue-300"
                  : "bg-white border-gray-300"
              }`}
            >
              <FaMale className="text-[25px]" />
            </div>
            <div
              className={`
               border-solid border-[1px] py-[7px] px-[10px]  hover:bg-pink-100 flex items-center justify-center text-center ${
                 gender === "Female"
                   ? "bg-pink-100 text-pink-600 border-pink-300"
                   : "bg-white border-gray-300"
               }
              `}
            >
              <FaFemale className="text-[25px]" />
            </div>
          </div>
          <div>
            <button className="button Nu" onClick={() => handleAddtoCart()}>Add to cart</button>
          </div>
        </div>

        {/* add to wishlist btn */}
        <div className="mt-[30px]">
          {addedToWishlist === false ? (
            <div
              className="flex items-center gap-[10px] cursor-pointer w-fit"
              onClick={() => setAddedToWishlist(true)}
            >
              <IoHeartSharp className="text-[25px]" />
              <span className="Nu uppercase font-[600] tracking-[2px]">
                Add to wishlist
              </span>
            </div>
          ) : (
            <div
              className="flex items-center gap-[10px] text-red-600 cursor-pointer w-fit"
              onClick={() => setAddedToWishlist(false)}
            >
              <IoHeartSharp className="text-[25px]" />
              <span className="Nu uppercase font-[600] tracking-[2px]">
                Remove
              </span>
            </div>
          )}
        </div>
      </div>

      <div className="flex Nu items-center gap-[10px] text-[18px] font-[600] pt-[25px] text-gray-500">
        <div>
          <span>Category:</span>
        </div>
        <div>
          <span>{p.category?.name}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
