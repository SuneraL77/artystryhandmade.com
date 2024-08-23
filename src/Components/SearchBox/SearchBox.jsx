import React, { useEffect, useState } from "react";
import { getProducts } from "../../functions/product";
import { IoSearch } from "react-icons/io5";

const SearchBox = () => {
  const [searchInput, setSearchInput] = useState(false);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = async () => {
    const response = await getProducts("createdAt", "desc");
    setProducts(response);
  };

  const handleSearch = (term) => {
    const lowerCaseTerm = term.toLowerCase();
    setFilteredProducts(
      products.filter((product) =>
        product.title.toLowerCase().includes(lowerCaseTerm)
      )
    );
  };

  return (
    <div className="w-full">
      <div className="flex items-center border-black md:border-[1px] border-b-[1px] border-solid  p-[4px] w-full px-[10px] rounded-sm">
        <input
          type="text"
          placeholder="Search"
          className="outline-none border-none w-full bg-transparent text-black placeholder:text-black text-sm"
          onChange={(e) => {
            handleSearch(e.target.value);
            setSearchInput(e.target.value);
          }}
        />
        <IoSearch className="text-lg" />
      </div>

      {/* search results */}
      {searchInput.length > 0 && (
        <div className="absolute w-full h-fit bg-white p-4 flex flex-col gap-3 border-solid border-[1px] border-gray-200 z-[10000000]">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((item) => (
              <a
                href={`/product/${item.slug}`}
                key={item.id}
                className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 p-[4px]"
              >
                <div className="w-[50px] h-[60px]">
                  <img src={item.images[0]?.imageUrl} alt="productImg" />
                </div>
                <div>
                  <div>
                    <span className="Nu uppercase text-[14px] font-[700] tracking-[1px]">
                      {item.title}
                    </span>
                  </div>
                  <div></div>
                </div>
              </a>
            ))
          ) : (
            <div className="flex items-center justify-center">
              {" "}
              <span>No items found</span>{" "}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBox;
