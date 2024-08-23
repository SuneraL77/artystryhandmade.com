import React, { useEffect, useState } from "react";
import { categoryData } from "../../Components/CategoryItem/CategoryData";
import CategoryItem from "../../Components/CategoryItem/CategoryItem";
import { Avatar, Badge } from "antd";
import { TextField } from "@mui/material";
import Sidebar from "../../Components/Sidebar/Sidebar";
import {
  getCategories,
  deleteCategory,
  addCategories,
} from "../../../../functions/category";
import toast, { Toaster } from "react-hot-toast";
import { PulseLoader } from "react-spinners";
import axios from "axios";

const AdminCategories = () => {
  const [img, setImg] = useState("");
  const [p_id, setPid] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [loading3, setLoading3] = useState(false);
  const [uploadError, setUploadError] = useState(false);

  // convert file
  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  useEffect(() => {
    setLoading3(true);
    loadCategories();
    setLoading3(false);
  }, []);

  const loadCategories = () => {
    getCategories().then((res) => {
      setCategories(res.data);
    });
  };

  // upload image
  const handleCloudinaryUpload = async (e) => {
    setLoading(true);
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_APP_API_ENDPOINT}/admin/uploadimg`,
        { image: base64 }
      );
      console.log("Cloudinary upload response:", response.data);
      setLoading(false);
      setUploadError(false);
      setImg(response.data.url);
      setPid(response.data.public_id);
    } catch (error) {
      console.error("Error uploading image to Cloudinary:", error);
      setUploadError(true);
      if (error.response && error.response.status === 413) {
        toast.error("This Image size is too large");
      } else {
        toast.error("Upload Failed, Something went wrong !");
      }
    } finally {
      setLoading(false);
    }
  };

  // remove image

  const removeCloudinaryUpload = async (public_id) => {
    try {
      setLoading(true);
      await axios.post(
        `${import.meta.env.VITE_APP_API_ENDPOINT}/admin/removeimg`,
        {
          public_id,
        }
      );

      setLoading(false);
      setImg("");
      setPid("");
    } catch (error) {
      console.error("Error uploading image to Cloudinary:", error);
    }
  };

  const handleDeleteCategory = async (slug) => {
    const response = await deleteCategory(slug);
    toast.success(response.message);
    loadCategories();
  };

  const handleSubmit = async () => {
    try {
      setLoading2(true);
      await addCategories(name, p_id, img);
      setLoading2(false);
      toast.success("Category successfully added");
      setName("");
      setImg("");
      setPid("");
      loadCategories();
    } catch (error) {
      toast.error("Something went wrong !");
      console.log(error);
    }
  };

  return (
    <div className="flex h-screen">
      <Toaster />
      <div className="flex-[2]">
        <Sidebar />
      </div>
      <div className="flex-[8] pt-[50px] pl-[30px] pr-[80px] Lato overflow-y-auto">
        {/* title */}
        <div className="flex items-center justify-between">
          <div>
            <span className="Mont text-[22px] font-[700]">Categories</span>
          </div>
        </div>

        {/* added categories */}
        <div className="mt-[50px]">
          {categories.length > 0 ? (
            <div className="flex items-center gap-[50px] flex-wrap">
              {" "}
              {categories.map((item) => (
                <CategoryItem
                  item={item}
                  key={item.id}
                  handleCategoryDelete={handleDeleteCategory}
                />
              ))}
            </div>
          ) : (
            <div>
              <span>No Categories Found</span>
            </div>
          )}
        </div>

        {/* add new category */}
        <div className="mt-[100px]">
          {/* title */}
          <div>
            <span className="Lato text-[22px] font-[700]">
              Add New Category
            </span>
          </div>

          {/* category image */}
          <div className="mt-[50px]">
            <div className="mb-[40px]">
              <span className="Nu text-[18px] font-[700]">Category Image</span>
            </div>

            {img ? (
              <div>
                {loading ? (
                  <PulseLoader />
                ) : (
                  <Badge
                    count="x"
                    style={{ cursor: "pointer" }}
                    onClick={() => removeCloudinaryUpload(p_id)}
                  >
                    <Avatar key={p_id} src={img} size={100} shape="square" />
                  </Badge>
                )}
              </div>
            ) : (
              <div>
                <label
                  id="upload"
                  className="p-[10px] bg-[#333] text-white rounded-lg px-[20px] cursor-pointer hover:bg-[#111] Lato font-[600]"
                >
                  {uploadError ? (
                    "Try Again"
                  ) : loading ? (
                    <PulseLoader color="#fff" />
                  ) : (
                    "Upload Image"
                  )}
                  <input
                    id="upload"
                    hidden
                    type="file"
                    onChange={handleCloudinaryUpload}
                  />
                </label>
              </div>
            )}
          </div>

          {/* category name */}

          <div className="mt-[50px]">
            <div className="mb-[15px]">
              <span className="Nu text-[18px] font-[700]">Category Name</span>
            </div>

            <div className="w-[250px]">
              <input
                type="text"
                placeholder="Category Name"
                className="py-[7px] px-[15px] outline-none w-full rounded-lg bg-gray-200"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>

          {/* add button */}
          <div className="mt-[50px] mb-[100px]">
            <div className="bg-[#333] hover:bg-[#111] rounded-md w-fit p-[7px] px-[20px] cursor-pointer  flex items-center justify-center text-white">
              <button
                type="submit"
                className="Nu font-[600]"
                onClick={handleSubmit}
              >
                Add Category
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminCategories;
