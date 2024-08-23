import React, { useEffect, useState } from "react";

import { Avatar, Badge } from "antd";
import axios from "axios";
import { getCategories } from "../../../../functions/category";
import {
 
  getProduct,
  updProduct,
} from "../../../../functions/product";
import { useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import { BiPlusCircle } from "react-icons/bi";
import { PulseLoader, CircleLoader } from "react-spinners";
const InputFields = ({ slug }) => {
  const [loading, setLoading] = useState(false);
  const [loading1, setLoading1] = useState(false);
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState("");
  const [error2, setError2] = useState("");
  const { user } = useSelector((state) => state.user);

  const [productData, setProductData] = useState({
    title: "",
    description: "",
    category: "",
    discount: "",
    quantity: "",
    gender: "",
    prices: [{ price: "", currency: "" }],
    images: [],
  });

  useEffect(() => {
    setLoading(true);
    loadCategory();
    loadProduct();
    setLoading(false);
  }, []);

  const loadCategory = () => {
    getCategories().then((res) => {
      setCategories(res.data);
    });
  };

  const loadProduct = async () => {
    getProduct(slug).then((res) => {
      if (Array.isArray(res.data) && res.data.length > 0) {
        const {
          _id,
          title,
          prices,
          description,
          category,
          discount,
          quantity,
          images,
          gender,
        } = res.data[0];

        setProductData({
          _id,
          title,
          prices,
          description,
          category,
          discount, // Include discount in the destructuring assignment
          quantity,
          images: images.map((image) => ({
            imageUrl: image.imageUrl,
            publicId: image.publicId,
          })),
          gender,
        });
      }
    });
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const handleCloudinaryUpload = async (e) => {
    const files = e.target.files;
    const base64Images = await Promise.all(
      Array.from(files).map((file) => convertBase64(file))
    );
  
    try {
      setLoading(true);
      const responses = await Promise.all(
        base64Images.map((base64) =>
          axios.post(
            `${import.meta.env.VITE_APP_API_ENDPOINT}/admin/uploadimg`,
            {
              image: base64,
            }
          )
        )
      );
      setLoading(false);
  
      const newImages = responses.map((response) => ({
        imageUrl: response.data.url,
        publicId: response.data.public_id,
      }));
  
      setProductData((prevProductData) => {
        const updatedImages = [...prevProductData.images, ...newImages];
        return { ...prevProductData, images: updatedImages };
      });
    } catch (error) {
      console.log("Error uploading image to Cloudinary:", error);
    }
  };
  // remove cloudinary


  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };
  
  
  const removeCloudinaryUpload = async (publicId, index) => {
    try {
      setLoading(true);
      await axios.post(
        `${import.meta.env.VITE_APP_API_ENDPOINT}/admin/removeimg`,
        {
          public_id: publicId,
        }
      );
      setLoading(false);
  
      const updatedImages = [...productData.images];
      updatedImages.splice(index, 1);
      setProductData((prevProductData) => ({
        ...prevProductData,
        images: updatedImages,
      }));
    } catch (error) {
      console.log("Error removing image from Cloudinary:", error);
    }
  };
  
  const handleAddPrice = () => {
    setProductData({
      ...productData,
      prices: [...productData.prices, { price: "", currency: "" }],
    });
  };
  // send datta back end
  const handleSubmit = async (e) => {
    if (!productData.title) {
      setError("Title is required");
    }
    if (!productData.price) {
      setError("Price is required");
    }
    if (!productData.category) {
      setError("Category is required");
    }
    setLoading1(true);
    const response = await updProduct(productData._id, productData, user.token);

    toast.success(`${response.message}`);
    setLoading1(false);
  };

  const handleRemovePrice = (index) => {
    const newPrices = [...productData.prices];
    newPrices.splice(index, 1);
    setProductData({ ...productData, prices: newPrices });
  };

  const handleChangePrice = (e, index) => {
    const { name, value } = e.target;
    const newPrices = [...productData.prices];
    newPrices[index] = { ...newPrices[index], [name]: value };
    setProductData({ ...productData, prices: newPrices });
  };
  console.log(productData)

  return (
<div className="flex h-[100vh] ">
      <Toaster />
      <div className="flex-[2]">
      
      </div>
      <div className="flex-[8] pt-[50px] pl-[30px] pr-[80px] Lato">
        <div className="flex flex-col gap-[20px]">
          <h2 className="Lato text-[23px] font-[700]">Add Product</h2>
          {error2 ? (
            <div>
              <p className="text-start text-red-400 ">{error2}</p>
            </div>
          ) : null}

          {error ? (
            <div>
              <p className="text-start text-red-400 ">{error}</p>
            </div>
          ) : null}
          <label className="w-full">
            <input
              type="text"
              name="title"
              placeholder="Product Title"
              className="py-[7px] px-[15px] outline-none w-full rounded-lg bg-gray-200"
              value={productData.title}
              onChange={handleChange}
            />
          </label>
          <div className="w-full">
            {productData.prices.map((price, index) => (
              <div key={index} className="flex gap-4 items-center">
                <input
                  type="number"
                  name="price"
                  placeholder="Price"
                  value={price.price}
                  onChange={(e) => handleChangePrice(e, index)}
                  className="py-2 px-3 rounded-lg bg-gray-200 outline-none"
                />
                <input
                  type="text"
                  name="currency"
                  placeholder="Currency"
                  value={price.currency}
                  onChange={(e) => handleChangePrice(e, index)}
                  className="py-2 px-3 rounded-lg bg-gray-200 outline-none"
                />
                <button
                  type="button"
                  onClick={() => handleRemovePrice(index)}
                  className="px-3 py-2 bg-red-500 text-white rounded-lg"
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={handleAddPrice}
              className="mt-4 px-3 py-2 bg-green-500 text-white rounded-lg"
            >
              Add Price
            </button>
          </div>
          <label className="w-full">
            <select
              name="category"
              className="py-[7px] px-[15px] outline-none w-full rounded-lg bg-gray-200"
              onChange={handleChange}
            >
              <option value="">Select Category</option>
              {categories.map((c) => (
                <option key={c._id} value={c._id}>
                  {c.name}
                </option>
              ))}
            </select>
          </label>

          <label className="w-full">
            <input
              type="number"
              name="discount"
              placeholder="Discount %"
              value={productData.discount}
              className="py-[7px] px-[15px] outline-none w-full rounded-lg bg-gray-200"
              onChange={handleChange}
            />
          </label>

          <label className="w-full">
            <input
              type="number"
              name="quantity" // <-- Corrected spelling
              placeholder="Quantity"
              value={productData.quantity}
              className="py-[7px] px-[15px] outline-none w-full rounded-lg bg-gray-200"
              onChange={handleChange}
            />
          </label>

          <select
            name="gender"
            value={productData.gender}
            onChange={handleChange}
            className="py-[7px] px-[15px] outline-none w-full rounded-lg bg-gray-200"
          >
            <option value="">Please Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="all">All</option>
          </select>


          <label className="w-full">
            <textarea
              name="description"
              placeholder="Product Description"
              value={productData.description}
              className="py-[7px] px-[15px] outline-none w-full h-[700px] rounded-lg bg-gray-200"
              onChange={handleChange}
            ></textarea>
          </label>

          {productData.images.map((image, index) => (
            <Badge
              count="x"
              style={{ cursor: "pointer" }}
              className="mb-3"
              onClick={() => removeCloudinaryUpload(image.publicId, index)}
            >
              <Avatar
                key={image.publicId}
                src={image.imageUrl}
                size={100}
                shape="square"
              />
            </Badge>
          ))}
    
              <label
                id="upload"
                className=" mt-3  p-2 p-[10px] bg-[#00000062] text-white rounded-lg px-[20px] cursor-pointer hover:bg-[#000000] Lato font-[600]"
              >
                {loading ? (
                  <PulseLoader className="text-white" />
                ) : (
                  "Upload Image"
                )}
                <input
                  id="upload"
                  onChange={(e) => handleCloudinaryUpload(e)}
                  hidden
                  type="file"
                />
              </label>

          <button
            onClick={handleSubmit}
            className="w-fit py-[7px] px-[40px] mb-6 bg-[#333] hover:bg-black text-white Lato font-[700] rounded-lg mt-[40px]"
          >
            {loading1 ? <CircleLoader className="text-white" /> : "Update Product"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default InputFields;
