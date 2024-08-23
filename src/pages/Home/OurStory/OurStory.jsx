import React from "react";
import { motion } from "framer-motion";
import img1 from "../../../assets/whoimg2.jpg";
import img2 from "../../../assets/whoimg1.jpg";

const OurStory = () => {
  return (
    <motion.div
      initial={{ opacity: 1, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      {/* title | description */}
      <div>
        <motion.div className="flex items-center justify-center">
          <span className="Nu uppercase md:text-[15px] text-[12px] font-[700] text-center">
            Artystry Handmade Ceylon: Artystry
          </span>
        </motion.div>
        <motion.div className="flex items-center justify-center">
          <span className="Mont md:text-[35px] text-[25px] text-center uppercase font-[700] tracking-[5px]">
            Who We Are ?
          </span>
        </motion.div>
        <motion.div className="flex items-center justify-center text-center mt-[15px]">
          <p className="w-[500px] Nu font-[500] text-[12px] md:text-[18px]">
          "Artystry Hand Made Ceylon" brings you unique, handcrafted items that showcase the beauty and tradition of Ceylon's rich heritage. Every piece is made with care, reflecting the island's artistic legacy.
          </p>
        </motion.div>
      </div>

      {/* images */}
      <motion.div className="flex justify-center flex-wrap md:gap-[25px] gap-[10px] mt-[25px]">
        <img
          src={img1}
          alt="our story"
          className="md:w-[400px] w-[150px] md:h-[250px] h-[100px] object-cover"
        />
        <img
          src={img2}
          alt="our story"
          className="md:w-[400px] w-[150px] md:h-[250px] h-[100px] object-cover"
        />
      </motion.div>
    </motion.div>
  );
};

export default OurStory;
