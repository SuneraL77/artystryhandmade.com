import React, { useEffect, useState } from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

import Search from "../../Components/Search/Search";
import { motion } from "framer-motion";
import Categoreis from "../Shop/Categories/Categoreis";
import Products from "../Shop/Products/Products";
import { getOneCategory } from "../../functions/category";
import { useParams } from "react-router-dom";
import ReactPaginate from "react-paginate";
import ProductCard from "../../Components/ProductCard/ProductCard";

const OneCategory = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState({});
  const [loading, setLoading] = useState(false);
  const { slug } = useParams();

  useEffect(() => {
    loadOneCategory();
  }, []);

  const loadOneCategory = async () => {
    setLoading(true);
    const response = await getOneCategory(slug);
    setProducts(response.products);
    setCategory(response.category);
    setLoading(false);
  };

  const [pageNumber, setPageNumber] = useState(0);

  const productsPerPage = 12;
  const pagesVisited = pageNumber * productsPerPage;

  const displayProducts = products
    .slice(pagesVisited, pagesVisited + productsPerPage)
    .map((product) => {
      return (
        <motion.div
          initial={{ opacity: 1, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <ProductCard product={product} key={product._id} />
        </motion.div>
      );
    });

  const pageCount = Math.ceil(products.length / productsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
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
            {category.name}
          </h1>
        </motion.div>

        {/* categories */}
        <motion.div
          initial={{ opacity: 1, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        ></motion.div>

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
            <div>
              <Search />
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
            <div className="flex flex-col gap-[50px] justify-center items-center">
              <div className="md:grid flex flex-wrap justify-center grid-cols-4 md:gap-[40px] gap-[20px]">
                {displayProducts}
              </div>
              <div className="flex justify-center items-center">
                <ReactPaginate
                  previousLabel={"Previous"}
                  nextLabel={"Next"}
                  pageCount={pageCount}
                  onPageChange={changePage}
                  containerClassName={"paginationBttns"}
                  previousLinkClassName={"previousBttn"}
                  nextLinkClassName={"nextBttn"}
                  disabledClassName={"paginationDisabled"}
                  activeClassName={"paginationActive"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* footer */}
      <Footer />
    </div>
  );
};

export default OneCategory;
