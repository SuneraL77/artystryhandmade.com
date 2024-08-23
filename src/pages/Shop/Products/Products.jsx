import React, { useEffect, useState } from "react";
import ProductCard from "../../../Components/ProductCard/ProductCard";
import { motion } from "framer-motion";
import ReactPaginate from "react-paginate";
import { getProducts } from "../../../functions/product";
import { Skeleton } from "antd";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

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

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = async () => {
    setLoading(true);
    const response = await getProducts("createdAt", "desc");
    setProducts(response);
    setLoading(false);
  };

  return (
    <div className="flex flex-col gap-[50px] justify-center items-center">
      {loading === true ? (
        <div className="mb-[50px]">
          <Skeleton active />
        </div>
      ) : (
        <div className="md:grid flex flex-wrap justify-center grid-cols-4 md:gap-[40px] gap-[20px]">
          {displayProducts}
        </div>
      )}
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
  );
};

export default Products;
