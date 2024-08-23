import { useEffect, useRef, useState } from "react";
import { HiDotsHorizontal } from "react-icons/hi";
import { Link } from "react-router-dom";

const ProductsTableActionButton = ({ deleteProduct, _id, slug }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const handleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const dropdownRef = useRef(null);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.addEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <button
        type="button"
        className="text-black/90 relative"
        onClick={handleDropdown}
      >
        <HiDotsHorizontal size={18} />
        {showDropdown && (
          <div
            className="absolute top-[100%] right-[100%] translate-x-[50%] h-auto w-[200px] shadow-lg bg-white py-[6px] px-[10px] z-[1000] rounded-[8px] border-[1px] border-solid border-gray-100 text-left"
            ref={dropdownRef}
          >
            <ul className="flex flex-col text-[14px] gap-[10px]">
              <li className="">
                <Link
                  to={`/admin/updateproduct/${slug}`}
                  className="Lato font-[500]"
                >
                  Edit Product
                </Link>
              </li>
              <li className="">
                <Link
                  className="Lato font-[500]"
                  onClick={() => deleteProduct(_id)}
                >
                  Delete Product
                </Link>
              </li>
            </ul>
          </div>
        )}
      </button>
    </>
  );
};

export default ProductsTableActionButton;
