import React, { useEffect, useState } from "react";
import logo from "../../assets/logo5.png";
import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaTiktok } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { getCategories } from "../../functions/category";
import { useSelector } from "react-redux";

const Footer = () => {
  const useFullLinks = [
    {
      id: 1,
      page: "Home",
      path: "/",
    },

    {
      id: 2,
      page: "Shop",
      path: "/shop",
    },

    {
      id: 3,
      page: "About",
      path: "/about",
    },

    {
      id: 4,
      page: "Contact",
      path: "/contact",
    },
  ];

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    loadCategories();
  }, []);

  const loadCategories = async () => {
    const response = await getCategories();
    setCategories(response.data);
  };

  const { user } = useSelector((state) => state.user);

  return (
    <div className="text-white w-full bg-[#212529] md:px-[100px] px-[25px] pt-[100px] flex flex-col  gap-[100px]  ">
      <motion.div
        initial={{ opacity: 1, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="flex flex-col gap-[100px] "
      >
        <div className="gap-[50px] flex items-start md:justify-between flex-wrap md:flex-nowrap">
          <div className="flex md:items-center items-start md:flex-row flex-col gap-[15px] ">
            <img src={logo} alt="logo" className="w-[200px]" />
            <div className="flex flex-col gap-[10px]">
              <div>
                <span className="Mont text-[15px] font-[600] uppercase tracking-[4px]">
                  Artystry Handmade
                </span>
              </div>
              <div className="md:w-[400px]">
                <span className="Nu text-[10px] uppercase tracking-[2px]">
                  Include essential contact details, links to social media
                  profiles, and navigation links to key pages like About Us,
                  Shop, and Contact. Make sure to add a brief copyright notice
                  and any relevant legal disclaimers. Keep the design clean and
                  easy to navigate for a user-friendly experience.
                </span>
              </div>
            </div>
          </div>

          {/* use full links */}
          <div className=" flex flex-col gap-[10px]">
            {/* title */}
            <div>
              <span className="Mont uppercase text-[14px] font-[600] tracking-[4px]">
                Links
              </span>
            </div>

            <div className="flex flex-col gap-[5px]">
              {useFullLinks.map((item) => (
                <div key={item.id}>
                  <Link
                    to={item.path}
                    className="Nu text-[12px] uppercase cursor-pointer hover:text-white/90 tracking-[2px]"
                  >
                    {item.page}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* categories */}
          <div className=" flex flex-col gap-[10px]">
            {/* title */}
            <div>
              <span className="Mont uppercase text-[14px] font-[600] tracking-[4px] ">
                Categories
              </span>
            </div>

            <div className="flex flex-col gap-[5px]">
              {categories.map((item) => (
                <a href={`/category/${item.slug}`} key={item.slug}>
                  <span className="Nu text-[12px] uppercase cursor-pointer hover:text-white/90 tracking-[2px]">
                    {item.name}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Account */}
          <div className="flex flex-col gap-[10px]">
            {/* title */}
            <div>
              <span className="Mont uppercase text-[14px] font-[600] tracking-[4px]">
                Account
              </span>
            </div>

            <div className="flex flex-col gap-[5px]">
              {user?.token ? (
                <div>
                  <Link
                    to={`${
                      user.role === "admin"
                        ? "/admin/home"
                        : "/user/myAccount/accountdetails"
                    }`}
                    className="Nu text-[12px] uppercase cursor-pointer hover:text-white/90 tracking-[2px]"
                  >
                    Profile
                  </Link>
                </div>
              ) : (
                <div>
                  <Link
                    to={"/login"}
                    className="Nu text-[12px] uppercase cursor-pointer hover:text-white/90 tracking-[2px]"
                  >
                    Profile
                  </Link>
                </div>
              )}
              {user.token ? (
                <div>
                  <Link
                    to={"/user/cart"}
                    className="Nu text-[12px] uppercase cursor-pointer hover:text-white/90 tracking-[2px]"
                  >
                    Cart
                  </Link>
                </div>
              ) : (
                <div>
                  <Link
                    to={"/login"}
                    className="Nu text-[12px] uppercase cursor-pointer hover:text-white/90 tracking-[2px]"
                  >
                    Cart
                  </Link>
                </div>
              )}
              {user.token ? (
                <div>
                  <Link
                    to={"/user/wishlist"}
                    className="Nu text-[12px] uppercase cursor-pointer hover:text-white/90 tracking-[2px]"
                  >
                    Wishlist
                  </Link>
                </div>
              ) : (
                <div>
                  <Link
                    to={"/login"}
                    className="Nu text-[12px] uppercase cursor-pointer hover:text-white/90 tracking-[2px]"
                  >
                    Wishlist
                  </Link>
                </div>
              )}

              <div>
                <Link
                  to={"/termsAndConditions"}
                  className="Nu text-[12px] uppercase cursor-pointer hover:text-white/90 tracking-[2px]"
                >
                  Terms & Conditions
                </Link>
              </div>
              <div>
                <Link
                  to={"/privacyPolicy"}
                  className="Nu text-[12px] uppercase cursor-pointer hover:text-white/90 tracking-[2px]"
                >
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="flex md:flex-row flex-col items-center md:gap-[100px] gap-[50px]">
          {/* connect with us */}
          <div className="flex flex-col items-center md:items-start gap-[10px]">
            {/* title */}
            <div>
              <span className="Mont uppercase text-[14px] font-[600] tracking-[4px]">
                Connect with us
              </span>
            </div>

            {/* icons */}
            <div className="flex items-center gap-[20px] text-[25px]">
              <div>
                <FaFacebook className="cursor-pointer hover:text-white/90" />
              </div>
              <div>
                <IoLogoWhatsapp className="cursor-pointer hover:text-white/90" />
              </div>
              <div>
                <FaTiktok className="cursor-pointer hover:text-white/90" />
              </div>
              <div>
                <AiFillInstagram className="cursor-pointer hover:text-white/90" />
              </div>
            </div>
          </div>

          <div className="flex md:flex-row flex-col text-center items-center gap-[10px]">
            <div>
              <MdLocationOn className="text-[30px]" />
            </div>
            <div>
              <span className="Nu uppercase text-[14px] font-[600] tracking-[4px]">
                Kottawa, Sri Lanka
              </span>
            </div>
          </div>

          <div className="flex md:flex-row flex-col text-center items-center gap-[10px]">
            <div>
              <IoIosCall className="text-[30px]" />
            </div>
            <div>
              <span className="Nu uppercase text-[14px] font-[600] tracking-[4px]">
                +94 72 248 2992
              </span>
            </div>
          </div>
        </div>
      </motion.div>
      <div className="border-t-[1px] border-white/10 border-solid flex items-center justify-center py-[25px] text-center">
        <div className="flex items-center text-center md:gap-[10px] Nu uppercase md:tracking-[7px] tracking-[4px] flex-wrap justify-center md:text-[14px] text-[12px]">
          <span>&copy; Copyright</span>
          <span>2024</span>
          <span>Artystry</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
