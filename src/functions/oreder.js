import axios from "axios";
import toast from "react-hot-toast";

export const updateUseraddress = async (token,address) => {
  try {
    const response = await axios.put(
      `${import.meta.env.VITE_APP_API_ENDPOINT}/user/update/address`,
      {address},
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
}

export const getUserAdress = async (token,address) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_APP_API_ENDPOINT}/user/address`,
      {address},
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
}

export const createOrderCart = async (token) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_APP_API_ENDPOINT}/user/create/order/cart`,
        {},
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


  export const getSingleOrder = async (token) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_APP_API_ENDPOINT}/user/get/single/orders`,
        {},
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
  export const createOrderBuynow = async (token,productId,count,color) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_APP_API_ENDPOINT}/user/create/order/buynow`,
        {productId,count,color},
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
  export const getOrder = async (token,orderId) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_APP_API_ENDPOINT}/user/getorder/${orderId}`,null,
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
  export const updateSlip = async (token,orderId,slip) => {
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_APP_API_ENDPOINT}/user/payment/update`,
        {orderId,slip},
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