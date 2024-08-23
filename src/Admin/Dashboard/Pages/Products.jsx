import React, { useEffect, useState } from "react";
import Sidebar from "../Components/Sidebar/Sidebar";
import ProductsTable from "../Components/Table/Tables/ProductsTable";
import { FiSearch } from "react-icons/fi";
import {
  getProducts,
  getProductCount,
  deleteProducts,
} from "../../../functions/product";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import moment from "moment";

const AdminProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [productsCount, setProductsCount] = useState(0);

  const { user } = useSelector((state) => state.user);

  const currentDate = moment().format("DD MMM, YYYY");

  useEffect(() => {
    loadAllProducts();
    getProductCount().then((res) => setProductsCount(res));
  }, []);

  const loadAllProducts = async () => {
    setLoading(true);
    const response = await getProducts("createdAt", "desc", page);
    setProducts(response);
    setProductsCount(products.length);
    setLoading(false);
  };

  const deleteProduct = async (_id) => {
    setLoading(true);
    const response = await deleteProducts(_id, user.token);
    toast.success("Product Delted");
    loadAllProducts();
    setLoading(false);
  };

  const pageCount = Math.ceil(productsCount / 6);
  return (
    <div className="flex h-screen">
      <div className="flex-[2]">
        <Sidebar />
      </div>
      <div className="flex-[8] pt-[50px] pl-[30px] pr-[80px] Lato overflow-y-auto">
        {/* title */}
        <div className="flex items-center justify-between">
          <div>
            <span className="Lato text-[22px] font-[700]">Products</span>
          </div>

          {/* date */}
          <div className="p-[7px] text-[16px] text-[#676767]  w-[200px] flex justify-end bg-white rounded-md">
            <span>{currentDate}</span>
          </div>
        </div>

        <div className="mt-[25px] mb-[40px]">
          {/* title | search */}
          <div className="flex items-center justify-between mb-[10px]">
            {/* title */}
            <div>
              <span className="Lato text-[18px] font-[700] text-[#676767]">
                Products
              </span>
            </div>

            {/* serach */}
            <div>
              <div className="flex bg-[#D9D9D9] w-fit py-[3px] px-[15px] items-center rounded-lg">
                <input
                  type="search"
                  placeholder="Search.."
                  className="bg-transparent outline-none Lato placeholder:text-black/60 placeholder:font-[600] placeholder:text-[14px] w-[240px]"
                />
                <FiSearch className="text-[20px]" />
              </div>
            </div>
          </div>
          <div>
            <ProductsTable products={products} deleteProduct={deleteProduct} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProducts;
