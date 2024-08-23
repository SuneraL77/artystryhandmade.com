import { useEffect, useRef, useState } from "react";
import { HiDotsHorizontal } from "react-icons/hi";
import { Link } from "react-router-dom";

const HomeActionButton = () => {
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
            className="absolute top-[100%] right-[50%] translate-x-[50%] h-auto min-w-[80px] shadow-lg bg-white py-[6px] px-[10px] z-[1] rounded-[8px] border-[1px] border-solid border-gray-100 text-left"
            ref={dropdownRef}
          >
            <ul className="flex flex-col text-[14px] gap-[5px]">
              <li className="">
                <Link to="/view" className="Lato font-[500]">
                  View
                </Link>
              </li>
              <li className="">
                <Link to="/view" className="Lato font-[500]">
                  Edit
                </Link>
              </li>
              <li className="">
                <Link to="/view" className="Lato font-[500]">
                  Delete
                </Link>
              </li>
            </ul>
          </div>
        )}
      </button>
    </>
  );
};

export default HomeActionButton;
