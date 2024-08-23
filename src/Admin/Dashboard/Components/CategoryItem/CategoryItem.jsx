import React from "react";
import CategoryItemAction from "../ActionButtons/CategoryItemAction";

const CategoryItem = ({ item, handleCategoryDelete }) => {
  return (
    <div className="w-[200px] h-[200px] flex flex-col gap-[10px] border-[1px] border-solid border-gray-200/50  hover:shadow-xl z-[800] relative">
      {/* category image */}
      <div className="w-[200px] h-[200px]  overflow-hidden  ">
        <img
          src={item.image.url}
          alt="categoryImg"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute top-0 right-0 m-[10px] z-[10000]">
        <CategoryItemAction
          slug={item.slug}
          handleCategoryDelete={handleCategoryDelete}
        />
      </div>

      {/* category name */}
      <div className="flex items-center justify-center py-[10px]">
        <span className="Lato">{item.catName}</span>
      </div>
    </div>
  );
};

export default CategoryItem;
