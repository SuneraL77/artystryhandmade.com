import React from "react";
import { Link } from "react-router-dom";

const CategoryItem = ({ item }) => {
  return (
    <Link
      to={`/category/${item.slug}`}
      className="flex flex-col items-center text-center gap-[10px] w-[200px] h-[260px] hover:shadow-lg transition-opacity cursor-pointer"
    >
      <div className="w-[200px] h-[200px]">
        <img
          src={item.image.url}
          alt="categoryImg"
          className="w-full h-full object-center"
        />
      </div>

      {/* category name */}
      <div className="p-[10px]">
        <span className="Nu uppercase tracking-[2px] font-[700] text-center">
          {item.name}
        </span>
      </div>
    </Link>
  );
};

export default CategoryItem;
