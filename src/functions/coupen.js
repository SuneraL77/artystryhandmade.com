import axios from "axios";
import toast from "react-hot-toast";


export const createCoupen = async (name, expiry, discount, token) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_APP_API_ENDPOINT}/admin/coupen`,
        { name, expiry, discount},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      toast.error(error?.response?.data?.error?.message)
      return {}; // or handle the error in a different way based on your needs
    }
  };

  export const  getOneCoupens = async (token,coupenId) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_APP_API_ENDPOINT}/admin/coupen/${coupenId}`,
        { userId,role},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response;
    } catch (error) {
      toast.error(error?.response?.data?.error?.message)
      return {}; // or handle the error in a different way based on your needs
    }
  };

  export const getAllCoupens = async (token) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_APP_API_ENDPOINT}/admin/coupens`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      toast.error(error?.response?.data?.error?.message)
      return {}; // or handle the error in a different way based on your needs
    }
  };

  export const deleteCoupen = async (coupenId, token) => {
    try {
      const response = await axios.delete(
        `${import.meta.env.VITE_APP_API_ENDPOINT}/admin/coupen/${coupenId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response;
    } catch (error) {
      toast.error(error?.response?.data?.error?.message)
      return {}; // or handle the error in a different way based on your needs
    }
  };