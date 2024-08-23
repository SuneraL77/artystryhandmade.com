import React, { useEffect, useState } from "react";
import { IoHeartSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { addWishlist, getWishlists } from "../../functions/product";
import { useSelector } from "react-redux";
import { IoHeartOutline } from "react-icons/io5";
import axios from "axios";

const ProductCard = ({ product }) => {
  const { title, slug, images, discount } = product;
  const [counrtCode, setCounrtyCode] = useState("LKR");
  const [currentImg, setCurrentImg] = useState(0);
  const [isInWishlist, setIsInWishlist] = useState(false); // State variable to store whether the product is in the wishlist or not
  const [price, setPrice] = useState("");

  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    // getGeoInfo();
    loadPrice();
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

  // Assuming `counrtCode` is the country code you want to filter by
  // Assuming `product.prices` is the array of prices

  // Assuming `counrtCode` is the country code you want to filter by
  // Assuming `product.prices` is the array of prices

  // Filter prices for the local country (LKR)
  const loadPrice = () => {
    let Prices = [];
    if (counrtCode == "LKR") {
      Prices = product.prices.filter((price) => price.currency === "LKR");
    } else {
      Prices = product.prices.filter((price) => price.currency === "USD");
    }
    Prices.map((p) => setPrice(p.price));
    console.log("Price :", price);
  };



  // Filter prices for other countries (USD)

  useEffect(() => {
    // Fetch the user's wishlist when the component mounts
    const fetchWishlist = async () => {
      try {
        const response = await getWishlists(user.token);
        if (response && response.wishlist) {
          // Check if the current product exists in the wishlist array
          const found = response.wishlist.find(
            (item) => item._id === product._id
          );
          setIsInWishlist(found ? true : false);
        }
      } catch (error) {
        console.error("Error fetching wishlist:", error);
      }
    };

    if (user.token) {
      fetchWishlist();
    }
  }, [user.token, product._id]);

  const addToWishlistHandler = async () => {
    const response = await addWishlist(user.token, product._id);
    console.log("wish item", response);
    setIsInWishlist(true); // After adding to wishlist, update the state variable
  };

  const discountedPrice = Math.round(price - (price * discount) / 100);

  return (
    <div className="md:w-[250px] w-[150px] md:h-[380px] h-[280px] hover:shadow-lg transition-shadow">
      <div>
        <div className="relative">
          {/* offer */}
          <div className="bg-white w-fit absolute mt-[5px] ml-[5px] py-[2px] px-[7px] text-[15px] font-[600] rounded-sm As">
            <span>-{discount}%</span>
          </div>

          {/* product img */}
          <div className="w-full md:h-[280px] h-[180px]">
            <Link
              to={`/product/${slug}`}
              className="w-full md:h-[280px] h-[180px]"
            >
              <img
                src={product.images[0]?.imageUrl}
                alt="product img"
                className="w-full h-full object-cover cursor-pointer  "
              />
            </Link>
          </div>

          {/* icons */}
          <div className="absolute right-0 top-0 mt-[5px] mr-[5px] z-[999]">
            {/* wishlist */}
            <div>
              {isInWishlist === true ? (
                <IoHeartSharp
                  className={`text-[25px] cursor-pointer text-red-700 ${
                    isInWishlist ? "text-red-700" : ""
                  }`}
                />
              ) : (
                <IoHeartOutline
                  className={`text-[25px] cursor-pointer text-red-700 ${
                    isInWishlist ? "text-red-700" : ""
                  }`}
                  onClick={() => addToWishlistHandler()}
                />
              )}
            </div>
          </div>
        </div>

        <div className="mt-[10px] flex flex-col gap-[10px] p-[5px]">
          {/* product name */}
          <div className="w-full whitespace-nowrap overflow-hidden text-ellipsis">
            <Link
              to={`/product/${slug}`}
              className="Mont uppercase cursor-pointer tracking-[2px] text-[14px] font-[500]"
            >
              {title}
            </Link>
          </div>

          {/* prices */}
          <div className="flex items-center md:gap-[20px] md:justify-start justify-between Nu font-[700]">
            {/* old price */}
            <div>
              <span className="line-through text-gray-500">
                {counrtCode === "LKR" ? `LKR. ${price}` : `USD ${price}`}
              </span>
            </div>

            {/* new price */}
            <div>
              <span>
                {counrtCode === "LKR" ? "LKR" : "USD"}. {discountedPrice}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
