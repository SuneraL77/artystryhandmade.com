import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Categoreis from "./Categories/Categoreis";
import Search from "../../Components/Search/Search";
import Products from "./Products/Products";
import { motion } from "framer-motion";
import SearchBox from "../../Components/SearchBox/SearchBox";

const Shop = () => {
  return (
    <div>
      {/* header */}
      <div className="sticky top-0 w-full z-[100000]">
        <div>
          <Header />
        </div>
      </div>

      {/* content */}
      <div className="md:px-[50px] px-[20px] mt-[50px] mb-[50px]">
        {/* title */}
        <motion.div
          initial={{ opacity: 1, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-[50px] flex items-center gap-[10px]"
        >
          <div className="w-[6px] h-[25px] bg-black"></div>
          <h1 className="text-[20px] font-[700] text-gray-900 As uppercase tracking-[5px]">
            All products
          </h1>
        </motion.div>

        {/* categories */}
        <motion.div
          initial={{ opacity: 1, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Categoreis />
        </motion.div>

        {/* products */}
        <div className="mt-[50px]">
          {/* sort | search */}
          <motion.div
            initial={{ opacity: 1, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-wrap items-center md:justify-between justify-center gap-[20px]"
          >
            {/* search */}
            <div className="w-[300px] relative">
              <SearchBox />
            </div>

            {/* sort */}
            <div className="flex md:flex-row flex-col items-center gap-[10px]">
              <div>
                <span className="Nu font-[500]">Sort by:</span>
              </div>
              <select
                name="sort"
                id="sort"
                className="Nu p-[5px] border-[1px] border-solid border-black outline-none font-[500] cursor-pointer"
              >
                <option value="op1">Price Low to High</option>
                <option value="op2">Price High to Low</option>
                <option value="op3">Featured</option>
                <option value="op4">Best Selling</option>
              </select>
            </div>
          </motion.div>

          {/* products */}
          <div className="mt-[100px]">
            <Products />
          </div>
        </div>
      </div>

      {/* footer */}
      <Footer />
    </div>
  );
};

export default Shop;
