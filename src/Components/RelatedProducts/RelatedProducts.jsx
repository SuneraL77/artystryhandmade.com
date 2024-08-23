import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";

const RelatedProducts = ({r}) => {
  const [products, setProducts] = useState([]);


  

  return (
    <div className="flex gap-[45px] flex-wrap">
      {r.map((p) => (
        <ProductCard product={p} key={p._id} />
      ))}
    </div>
  );
};

export default RelatedProducts;
