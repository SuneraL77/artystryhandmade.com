import React, { useEffect, useState } from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import WishlistCard from "../../Components/WishlistCard/WishlistCard";
import { deleteWishlists, getWishlists } from "../../functions/product";
import { useSelector } from "react-redux";

const Wishlist = () => {
  const [loading, setLoading] = useState(false);
  const { user } = useSelector((state) => state.user);
  const [wishListProducts, setWishListProducts] = useState([]);

  useEffect(() => {
    loadWishListProducts();
  }, []);

  const loadWishListProducts = async () => {
    if (user.token) {
      setLoading(true);
      try {
        const response = await getWishlists(user.token);
        setWishListProducts(response.wishlist);
      } catch (error) {
        console.error("Failed to load wishlist products:", error);
      } finally {
        setLoading(false);
      }
    } else {
      setLoading(false); // Make sure to set loading to false when user.token is null
    }
  };

  const removeWishlist = async (productId) => {
    await deleteWishlists(user.id, productId);

    loadWishListProducts();
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
          <h1 className="text-[20px] font-[700] text-gray-900 As uppercase tracking-[5px]">
            Wishlist
          </h1>
        </div>

        {/* wishlist items */}

        {wishListProducts.length === 0 && (
          <div>
            <span className="Nu uppercase font-[600] tracking-[4px]">
              Wishlist empty
            </span>
          </div>
        )}

        <div className="md:grid flex flex-wrap grid-cols-4 md:gap-[10px] gap-[20px]">
          {wishListProducts.length > 0 &&
            wishListProducts.map((product, index) => (
              <WishlistCard
                key={index}
                product={product}
                removeWishlist={removeWishlist}
              />
            ))}
        </div>

        {/* add all button */}

        <div className="flex md:flex-row flex-col items-center justify-end mt-[100px] gap-[25px]">
          <button className="button Nu md:w-fit w-full">Remove All</button>
          <button className="button md:w-fit w-full Nu">Add All to Cart</button>
        </div>
      </div>

      {/* footer */}
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Wishlist;
