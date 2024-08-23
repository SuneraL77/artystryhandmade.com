import React, { useEffect, useState } from "react";
import { MdAccountCircle } from "react-icons/md";
import { HiShoppingCart } from "react-icons/hi";
import { IoHeartSharp } from "react-icons/io5";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { RiLoginCircleLine } from "react-icons/ri";
import { getWishlists } from "../../functions/product";
import { IoSearch } from "react-icons/io5";
import { getProducts } from "../../functions/product";
import SearchBox from "../SearchBox/SearchBox";
import Logo from "../../assets/logo.svg";
import { FaUser } from "react-icons/fa";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { cart } = useSelector((state) => ({ ...state }));

  const navLinks = [
    {
      id: 1,
      text: "Home",
      link: "/",
    },
    {
      id: 2,
      text: "Shop",
      link: "/shop",
    },
    {
      id: 3,
      text: "About",
      link: "/about",
    },
    {
      id: 4,
      text: "Contact",
      link: "/contact",
    },
  ];

  useEffect(() => {
    loadWishList();

    const handleScroll = () => {
      const scrolled = window.scrollY > 100;
      setIsScrolled(scrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [menuOpen, setMenuOpen] = useState(false);

  const { user } = useSelector((state) => state.user);

  const [wishLength, setWishLength] = useState(0);

  const [wishItems, setWishItems] = useState([]);

  const loadWishList = async () => {
    if (user.token) {
      const response = await getWishlists(user.token);

      setWishItems(response.wishlist && response.wishlist);

      if (response.wishlist) {
        setWishLength(response.wishlist.length);
      }
    } else {
      setWishLength(0);
    }
  };

  const navigate = useNavigate();

  return (
    <div
      className={`flex items-center  relative justify-between md:py-[20px] py-[15px] md:px-[35px] px-[10px] bg-transparent ${
        isScrolled
          ? "text-black backdrop-blur-lg bg-white/20 transition-all scrl"
          : "transition-all text-black   bg-[#e9ecef]"
      }`}
    >
      <div className="flex items-center gap-20">
        {/* logo */}
        <Link
          to={"/"}
          className="Mont md:text-[18px] text-[13px] uppercase cursor-pointer"
        >
          <span>Artystry</span>
          <p className="uppercase md:text-[10px] text-[6px]">
            Artystry Handmade Ceylon
          </p>
        </Link>

        {/* nav links */}
        <div className="md:flex hidden items-center gap-[25px]   ">
          {navLinks.map((link) => {
            return (
              <NavLink
                to={link.link}
                key={link.id}
                className={`Mont hover-underline-animation ${
                  isScrolled ? "hover-underline-animation-white" : ""
                } text-[13px] uppercase cursor-pointer font-[500] tracking-wider`}
              >
                {link.text}
              </NavLink>
            );
          })}
        </div>
      </div>

      <div className="flex items-center gap-8">
        {/* search */}
        <div className="w-[300px] relative md:block hidden">
          <SearchBox />
        </div>

        {/* icons */}
        <div className="flex items-center md:text-[30px] text-[25px] md:gap-[10px] gap-[5px]">
          {/* account icon */}
          {user.token ? (
            user.role === "admin" ? (
              <Link
                to={"/admin/home"}
                className={`cursor-pointer  ${
                  isScrolled
                    ? "hover:hover:text-black/70"
                    : "hover:text-black/70"
                }`}
              >
                <MdAccountCircle />
              </Link>
            ) : (
              <Link
                to={"/user/myAccount/accountdetails"}
                className={`cursor-pointer  ${
                  isScrolled
                    ? "hover:hover:text-black/70"
                    : "hover:text-black/70"
                }`}
              >
                <MdAccountCircle />
              </Link>
            )
          ) : (
            <Link to={"/login"}>
              <FaUser />
            </Link>
          )}

          {/* heart icon */}
          <div className="relative">
            {/* length in wishlist */}
            {wishItems && wishItems.length > 0 && (
              <div className="absolute bottom-[15px] bg-red-500 w-[20px] h-[20px] flex items-center justify-center p-[7px] text-white rounded-full text-center   right-[-5px]">
                <span className="text-[15px]">{wishLength && wishLength}</span>
              </div>
            )}

            {user?.token ? (
              <Link
                to={"/user/wishlist"}
                className={`cursor-pointer  ${
                  isScrolled ? "hover:text-black/70" : "hover:text-black/70"
                }`}
              >
                <IoHeartSharp />
              </Link>
            ) : (
              <Link
                to={"/login"}
                className={`cursor-pointer  ${
                  isScrolled ? "hover:text-black/70" : "hover:text-black/70"
                }`}
              >
                <IoHeartSharp />
              </Link>
            )}
          </div>

          {/* cart icon */}
          <div className="relative">
            {/* length in cart */}
            {cart && (
              <div className="absolute bottom-[15px] bg-red-500 w-[20px] h-[20px] flex items-center justify-center p-[7px] text-white rounded-full text-center   right-[-5px]">
                <span className="text-[15px]">{cart && cart.length}</span>
              </div>
            )}

            {user?.token ? (
              <Link
                to={"/user/cart"}
                className={`cursor-pointer  ${
                  isScrolled ? "hover:text-black/70" : "hover:text-black/70"
                }`}
              >
                <HiShoppingCart />
              </Link>
            ) : (
              <Link
                to={{ pathname: "/login", state: { from: cart } }}
                className={`cursor-pointer  ${
                  isScrolled ? "hover:text-black/70" : "hover:text-black/70"
                }`}
              >
                <HiShoppingCart />
              </Link>
            )}
          </div>

          {/* menu icon */}
          <div className="md:hidden">
            {/* menu open | close icons */}
            {menuOpen ? (
              <div onClick={() => setMenuOpen(false)}>
                <IoMdClose className="text-[28px]" />
              </div>
            ) : (
              <div onClick={() => setMenuOpen(true)}>
                <IoMdMenu className="text-[28px]" />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* mobile screen menu */}
      {menuOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "100vh", opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="absolute z-[200000] h-[100vh] w-[100%] flex flex-col bg-white right-0 m-auto justify-start items-center gap-[20%]  top-14 text-black"
        >
          {/* search box */}
          <div className="w-full relative px-[15%] mt-[10%]">
            <SearchBox />
          </div>
          <div className="flex flex-col gap-[20px] items-center text-center">
            {navLinks.map((link) => {
              return (
                <NavLink
                  to={link.link}
                  key={link.id}
                  className={"uppercase Mont tracking-[2px] font-[500]"}
                >
                  {link.text}
                </NavLink>
              );
            })}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
