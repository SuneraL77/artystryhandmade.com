import axios from "axios";
import toast from "react-hot-toast";

export const addFlashDeals = async (name, offer, date, token) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_APP_API_ENDPOINT}/admin/flashdeals`,
      { name, offer, date },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response;
  } catch (error) {
    console.log("Error fetching products:", error);
    return {}; // or handle the error in a different way based on your needs
  }
};
export const addFlashDealsProduct = async (productId,id,token) => {
  try {
    const response = await axios.put(
      `${import.meta.env.VITE_APP_API_ENDPOINT}/admin/flashdeals/${id}`,
      { productId },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    toast.success("this product add flash deale")
    return response;
  } catch (error) {
    console.log("Error fetching products:", error);
    toast.error(error?.response?.data?.error?.message)
    return {}; // or handle the error in a different way based on your needs
  }
};

export const reomveFlashDealsProduct = async (productId,id,token) => {
  try {
    console.log("p =>",productId, "")
    const response = await axios.delete(
      `${import.meta.env.VITE_APP_API_ENDPOINT}/admin/flashdeals/${id}`,
      { productId },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    toast.success("this product add flash deale")
    return response;
  } catch (error) {
    console.log("Error fetching products:", error);
    toast.error(error?.response?.data?.error?.message)
    return {}; // or handle the error in a different way based on your needs
  }
};

export const updateFlashDeals = async (newOffer,newName,newDate,_id ,token) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_APP_API_ENDPOINT}/admin/flashdeals/update/${_id}`,
        { newOffer,newName,newDate },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response;
    } catch (error) {
      console.log("Error fetching products:", error);
      return {}; // or handle the error in a different way based on your needs
    }
  };

export const getFlasDeals = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_APP_API_ENDPOINT}/user/flashdeals`
      );
      return response;
    } catch (error) {
      console.log("Error fetching products:", error);
      return {}; // or handle the error in a different way based on your needs
    }
  };
  