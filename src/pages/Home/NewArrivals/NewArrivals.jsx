import React, { useEffect, useState } from "react";
import ProductCard from "../../../Components/ProductCard/ProductCard";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { getProducts } from "../../../functions/product";
import { Skeleton } from "antd";

const NewArrivals = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadAllProducts();
  }, []);

  const loadAllProducts = async () => {
    setLoading(true);
    const response = await getProducts("createdAt", "desc");
    setProducts(response);
    setLoading(false);
  };

  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 1, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      {/* title */}
      <motion.div className="mb-[50px] flex items-center gap-[10px]">
        <div className="w-[6px] h-[25px] bg-black"></div>
        <h1 className="text-[20px] font-[700] text-gray-900 As uppercase tracking-[5px]">
          New Arrivals
        </h1>
      </motion.div>

      {/* products */}
      {loading === true ? (
        <div className="mb-[50px]">
          <Skeleton active />
        </div>
      ) : (
        <motion.div className="flex justify-center">
          <div
            className="mb-[50px] flex flex-wrap
         items-center justify-center md:gap-[25px] gap-[15px]"
          >
            {products.slice(0, 4).map((item, i) => (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  duration: 0.3,
                  delay: i / 10,
                }}
                viewport={{ once: true }}
                key={i}
              >
                <ProductCard key={item.id} product={item} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
      <motion.div className="flex justify-center items-center">
        {/* explore more */}
        <div>
          <button
            className="button Nu uppercase"
            onClick={() => navigate("/shop")}
          >
            {" "}
            Explore More
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default NewArrivals;
