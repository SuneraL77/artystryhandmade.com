import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Parallax, Pagination, Navigation, Autoplay } from "swiper/modules";
import img from "../../assets/img_4.jpg";
import logo from "../../assets/logo5.png";
import { motion } from "framer-motion";

const HomeSlider = () => {
  return (
    <div className="w-full md:h-[80vh] h-screen">
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        speed={1500}
        parallax={true}
        navigation={false}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Parallax, Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <div className="absolute inset-0 bg-[#212529] opacity-60"></div>
        <div
          slot="container-start"
          className="parallax-bg"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1720945489924-19b707539b3a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          data-swiper-parallax="-23%"
        ></div>
        <SwiperSlide className="flex items-center justify-start">
          <div
            className="flex items-center justify-center md:flex-row flex-col"
            data-swiper-parallax="-300"
          >
            <motion.div
              initial={{ x: -200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.9 }}
              data-swiper-parallax="-200"
            >
              <img
                src={logo}
                alt="logo"
                className="md:w-[400px] w-[200px] md:h-[400px] h-[200px]"
              />
            </motion.div>
            <div
              className="md:w-[500px] Mont uppercase md:text-[13px] text-[10px] text-center md:text-start flex flex-col gap-[10px] mt-[20px] md:mt-0"
              data-swiper-parallax="-100"
            >
              <motion.div
                initial={{ x: -200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.9 }}
              >
                <span className="Mont uppercase tracking-widest md:text-[40px] text-[25px] font-[700] md:leading-[45px] leading-7 text-center flex md:text-start">
                  {" "}
                  Ceylon Craftsmanship
                </span>
              </motion.div>
              <motion.div
                initial={{ x: -200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.3 }}
              >
                <span className="Nu">
                "Artystry Hand Made Ceylon" celebrates the rich heritage and artistry of Ceylon's handmade crafts. Each piece is meticulously crafted by local artisans, reflecting the island's cultural diversity and timeless traditions. Explore our collection and discover the unique beauty of Ceylon craftsmanship, where tradition meets creativity.
                </span>
              </motion.div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center">
          <div
            className="md:w-[600px] Mont uppercase md:text-[13px] text-[10px] flex flex-col gap-[10px] text-center"
            data-swiper-parallax="-100"
          >
            <motion.div
              initial={{ x: 200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.9 }}
            >
              <span className="Mont uppercase tracking-widest md:text-[40px] text-[25px] font-[700] md:leading-[45px] leading-7 text-center flex ">
                {" "}
                Timeless Creations
              </span>
            </motion.div>
            <motion.div
              initial={{ x: 200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.4 }}
            >
              <span className="Nu">
              "Artystry Hand Made Ceylon" offers a collection of timeless creations that capture the spirit of Ceylon's rich craft heritage. Our artisans pour their heart into every piece, crafting items that resonate with tradition and elegance. Discover the enduring beauty of our handmade products, where every item is a testament to the art of Ceylon.
              </span>
            </motion.div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col md:justify-between justify-center h-full">
            <div className="flex md:justify-end md:text-right text-center">
              <div
                className="md:w-[500px]  md:mt-[100px] Mont uppercase md:text-[13px] text-[10px] flex flex-col gap-[10px]"
                data-swiper-parallax="-100"
              >
                <motion.div
                  initial={{ x: 200, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.9 }}
                >
                  <span className="Mont uppercase tracking-widest md:text-[40px] text-[25px] font-[700] md:leading-[45px] leading-7 md:text-end text-center flex ">
                    {" "}
                    Island Artistry
                  </span>
                </motion.div>
                <motion.div
                  initial={{ x: 200, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.9, delay: 0.4 }}
                >
                  <span className="Nu">
                  At "Artystry Hand Made Ceylon," we bring you the essence of Sri Lanka's island artistry. Our handmade creations are a blend of traditional techniques and contemporary designs, each piece telling a story of skill and passion. Experience the unique charm of our handcrafted items, inspired by the natural beauty and cultural heritage of Ceylon.
                  </span>
                </motion.div>
              </div>
            </div>

            
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomeSlider;
