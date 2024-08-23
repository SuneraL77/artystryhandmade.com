import React, { useEffect, useState } from "react";
import ProductCard from "../../../Components/ProductCard/ProductCard";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { getProducts } from "../../../functions/product";
import { Skeleton } from "antd";

const FeaturedProducts = () => {
  //   fetching fake data

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadAllProducts();
  }, []);

  const loadAllProducts = async () => {
    setLoading(true);
    const response = await getProducts("sold", "desc");
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
      <div className="mb-[50px] flex items-center gap-[10px]">
        <div className="w-[6px] h-[25px] bg-black"></div>
        <h1 className="text-[20px] font-[700] text-gray-900 As uppercase md:tracking-[5px] tracking-[3px]">
          Featured Products
        </h1>
      </div>

      <div className="flex flex-col justify-center items-center">
        {loading === true ? (
          <div className="mb-[50px]">
            <Skeleton active />
          </div>
        ) : (
          <div className="md:grid flex flex-wrap justify-center grid-cols-4 md:gap-[25px] gap-[15px]">
            {products.slice(0, 8).map((item, i) => (
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
                <ProductCard product={item} key={item.id} />
              </motion.div>
            ))}
          </div>
        )}

        {/* explore more */}
        <div className="mt-[50px]">
          <button
            className="button Nu uppercase"
            onClick={() => navigate("/shop")}
          >
            Explore More
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturedProducts;
