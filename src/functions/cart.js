import axios from 'axios';
import toast from 'react-hot-toast';
export const addtocart = async (token,cart) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_APP_API_ENDPOINT}/user/cart`,
        {cart}, // no data to send in the body
        {
          headers: {
            Authorization: `Bearer ${token}`, // Include the token in the Authorization header
          },
        }
      );
      return response.data; // Return the response data
    } catch (error) {
      console.log(error)
      // Handle errors, for example, showing a toast message
      toast.error(error?.response?.data?.error?.message);
      return null; // Return null or handle the error in a different way based on your needs
    }
  };

  export const updateCart = async (token,productId,color,newQuantity) => {
    console.log("=>",productId,color,newQuantity)
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_APP_API_ENDPOINT}/user/cart`,
        {productId,newQuantity,color}, // no data to send in the body
        {
          headers: {
            Authorization: `Bearer ${token}`, // Include the token in the Authorization header
          },
        }
      );
      return response.data; // Return the response data
    } catch (error) {
      console.log(error)
      // Handle errors, for example, showing a toast message
      toast.error(error?.response?.data?.error?.message);
      return null; // Return null or handle the error in a different way based on your needs
    }
  };
  export const removeProduct = async (token,productId, color) => {
   
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_APP_API_ENDPOINT}/user/cart/delete`,
        {productId, color}, // no data to send in the body
        {
          headers: {
            Authorization: `Bearer ${token}`, // Include the token in the Authorization header
          },
        }
      );
      return response.data; // Return the response data
    } catch (error) {
      console.log(error)
      // Handle errors, for example, showing a toast message
      toast.error(error?.response?.data?.error?.message);
      return null; // Return null or handle the error in a different way based on your needs
    }
  };
  export const gettocart = async (token) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_APP_API_ENDPOINT}/user/carts`,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Include the token in the Authorization header
          },
        }
      )
      
      return response.data; // Return the response data
    } catch (error) {
      console.log(error);
      // Handle errors, for example, showing a toast message
      toast.error(error?.response?.data?.error?.message);
      return null; // Return null or handle the error in a different way based on your needs
    }
  };
  export const gettocartLength = async (token) => {
    try {
      console.log(token)
      const response = await axios.get(
        `${import.meta.env.VITE_APP_API_ENDPOINT}/user/cart/lenght`,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Include the token in the Authorization header
          },
        }
      );
      return response.data; // Return the response data
    } catch (error) {
      console.log(error);
      // Handle errors, for example, showing a toast message
      toast.error(error?.response?.data?.error?.message);
      return null; // Return null or handle the error in a different way based on your needs
    }
  };

 
  