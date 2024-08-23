import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ProductImages from "./ProductImages";
import ProductDetails from "./ProductDetails";
import ProductDescription from "./ProductDescription";
import RelatedProducts from "../RelatedProducts/RelatedProducts";
import { motion } from "framer-motion";
import {
  getProduct,
  getRelated,
  productRatingsAdd,
} from "../../functions/product";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

const SingleProduct = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState([]);
  const [related, setRelated] = useState([]);
  const [star, setStar] = useState("");
  const [comment, setComment] = useState("");

  const { user } = useSelector((state) => state.user);

  const sendRating = async (productId) => {
    const response = await productRatingsAdd(
      productId,
      star,
      comment,
      user.token
    );
    loadProduct();
    toast.success(response.message);
  };

  useEffect(() => {
    loadProduct();
  }, []);

  const loadProduct = async () => {
    const response = await getProduct(slug);
    response.map((p) => relateProduct(p._id));
    setProduct(response);
  };
  const relateProduct = async (p) => {
    const response = await getRelated(p);
    setRelated(response);
  };
  return (
    <div>
      {/* header */}
      <div className="sticky top-0 w-full z-[100000]">
        <div className=" w-full">
          <Header />
        </div>
      </div>

      {/* content */}
      <div className="md:px-[50px] px-[20px] mt-[50px] mb-[100px] flex flex-col gap-[100px]">
        <motion.div
          initial={{ opacity: 1, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex md:flex-row flex-col gap-[50px]"
        >
          <div className="flex-[1] ">
            {product.map((p) => (
              <ProductImages p={p} />
            ))}
          </div>
          <div className="flex-[1]">
            {product.map((p) => (
              <ProductDetails p={p} />
            ))}
          </div>
        </motion.div>
        {/* product description | ratings */}
        <motion.div
          initial={{ opacity: 1, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {product.map((p) => (
            <ProductDescription
              p={p}
              setStar={setStar}
              comment={comment}
              setComment={setComment}
              sendRating={sendRating}
            />
          ))}
        </motion.div>

        {/* related products */}
        <motion.div
          initial={{ opacity: 1, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {/* title */}
          <div className="mb-[50px] flex items-center gap-[10px]">
            <div className="w-[6px] h-[25px] bg-black"></div>
            <h1 className="text-[20px] font-[700] text-gray-900 As uppercase tracking-[5px]">
              Related Products
            </h1>
          </div>

          {/* products */}
          <div>
            <RelatedProducts r={related} />
          </div>
        </motion.div>
      </div>

      {/* footer */}
      <Footer />
    </div>
  );
};

export default SingleProduct;
