import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { addtocart } from "../../functions/cart";
import { useSelector } from "react-redux";
import axios from "axios";

const WishlistCard = ({ product,removeWishlist }) => {
  const [counrtCode, setCounrtyCode] = useState("");
  const [price, setPrice] = useState("");

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
    if (counrtCode === "LKR") {
      Prices = product.product.prices.filter(
        (price) => price.currency === "LKR"
      );
    } else {
      Prices = product.product.prices.filter(
        (price) => price.currency === "USD"
      );
    }
    Prices.map((p) => setPrice(p.price));
    console.log("Price :", price);
  };

  const discountPrice =
    product.product.discount > 0
      ? product.product.price -
        (product.product.price * product.product.discount) / 100
      : product.product.price;

  const { user } = useSelector((state) => state.user);

  const addToCartHandler = async () => {
    const response = addtocart(user.token, product.product._id);
    console.log("cart item =>", response);
  };

  return (
    <div className="md:w-[250px] w-full h-[400px] hover:shadow-lg transition-shadow">
      <div className="relative">
        <div className="w-full h-[280px]">
          <Link to={`/product/${product.product.slug}`}>
            <img
              src={product.product.images[0].imageUrl}
              alt="productImg"
              className="w-full h-full object-cover cursor-pointer  "
            />
          </Link>
        </div>

        <div className="top-0 absolute right-0 m-[10px]">
          <MdDelete className="text-red-600 text-[30px] cursor-pointer hover:text-red-700 w-fit"  onClick={() => removeWishlist( product.product._id)} />
        </div>
      </div>
      <div className="flex px-[7px] flex-col mt-[10px]">
        {/* product name */}

        <div className="w-full whitespace-nowrap overflow-hidden text-ellipsis">
          <span className="Mont uppercase cursor-pointer tracking-[2px] text-[14px] font-[500]">
            {product.product.title}
          </span>
        </div>

        {/* price */}
        <div>
          <span className="Nu font-[700]">
            {counrtCode === "LKR" ? `LKR. ${price}` : `USD ${price}`}
          </span>
        </div>
      </div>
      <div className="px-[10px] flex flex-col gap-[10px] mt-[10px]">
        {/* add to cart button */}
        <div>
          <button
            className="wishlistButton Nu"
            onClick={() => addToCartHandler()}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default WishlistCard;
