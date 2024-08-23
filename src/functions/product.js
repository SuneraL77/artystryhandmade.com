import axios from "axios";
import toast from "react-hot-toast";


export const addProduct = async (productData, token) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_APP_API_ENDPOINT}/admin/product`,
      { productData },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data; // Return the response data
  } catch (error) {
    throw error; // Throw the error to be caught by the calling code
  }
};


export const updProduct = async (productId,productData, token) => {
  try {
  const response =  await axios.put(
      `${import.meta.env.VITE_APP_API_ENDPOINT}/admin/product/${productId}`,
      { productData },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response.data)
    return response.data
  } catch (error) {
    toast.error(error?.response?.data?.error?.message);
  }

};



export const productRatingsAdd = async (productId,star,comment,token) => {
  try {
  const response =  await axios.put(
      `${import.meta.env.VITE_APP_API_ENDPOINT}/user/product/ratings/${productId}`,
      { star,comment},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response.data)
    return response.data
  } catch (error) {
    console.log(error)
    toast.error(error?.response?.data?.error?.message);
  }

};
export const getProducts = async (sort, order, page) => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_APP_API_ENDPOINT}/user/products`, { sort, order, page });
    
      return response.data;
      
    } catch (error) {
      console.log("Error fetching products:", error);
      return []; // or handle the error in a different way based on your needs
    }
  };
  
  export const getProductCount = async () =>{

    const response = await axios.get(`${import.meta.env.VITE_APP_API_ENDPOINT}/user/product/count`);
    
    return response.data
  }
  export const searchProduct = async (query) => {
    const response = await axios.post(`${import.meta.env.VITE_APP_API_ENDPOINT}/user/product/search`,{query});
    
    return response.data
  }


  export const deleteProducts = async (_id, token) => {
    const response = await axios.delete(
      `${import.meta.env.VITE_APP_API_ENDPOINT}/admin/product/${_id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  
    return response.data;
  };
  
  export const getProduct = async (slug) => {
    try {
      console.log(slug)
      const response = await axios.get(`${import.meta.env.VITE_APP_API_ENDPOINT}/user/product/${slug}`);
      return response.data;

      
    } catch (error) {
      console.log("Error fetching products:", error);
      return {}; // or handle the error in a different way based on your needs
    }
  };
  
  export const getRelated = async (id) => {
    console.log(id);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_APP_API_ENDPOINT}/user/related/${id}`,null,
      );
      return response.data; // Return the response data
    } catch (error) {
      // Handle errors, for example, showing a toast message
      console.log("Error fetching related products:", error);
      return null; // Return null or handle the error in a different way based on your needs
    }
  };
  

  //wish list added functions

  export const addWishlist = async (token,productId) => {
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_APP_API_ENDPOINT}/user/wishlist`,
        {productId},
        {
          headers: {
            Authorization: `Bearer ${token}`, // Include the token in the Authorization header
          },
        }
      );
      return response.data; // Return the response data
    } catch (error) {
      // Handle errors, for example, showing a toast message
      toast.error(error?.response?.data?.error?.message);
      return null; // Return null or handle the error in a different way based on your needs
    }
  };


  export const deleteWishlists = async (userId,productId) => {

    try {
   console.log(userId,productId)
      const response = await axios.post(
        `${import.meta.env.VITE_APP_API_ENDPOINT}/user/wishlist/delete`,
        {userId,productId},
    
      );
      return response.data; // Return the response data
    } catch (error) {
      // Handle errors, for example, showing a toast message
      toast.error(error?.response?.data?.error?.message);
      return null; // Return null or handle the error in a different way based on your needs
    }
  };

  export const getWishlists = async (token,id) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_APP_API_ENDPOINT}/user/wishlists`,
        null, // no data to send in the body
        {
          headers: {
            Authorization: `Bearer ${token}`, // Include the token in the Authorization header
          },
        }
      );
      return response.data; // Return the response data
    } catch (error) {
      // Handle errors, for example, showing a toast message
      toast.error(error?.response?.data?.error?.message);
      return null; // Return null or handle the error in a different way based on your needs
    }
  };
  

  export const getBuyNow = async (id,quantity,token) => {
    console.log(id,token)
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_APP_API_ENDPOINT}/user/buynow`,
      {id,quantity}, // no data to send in the body
        {
          headers: {
            Authorization: `Bearer ${token}`, // Include the token in the Authorization header
          },
        }
      );
      return response.data; // Return the response data
    } catch (error) {
      // Handle errors, for example, showing a toast message
      toast.error(error?.response?.data?.error?.message);
      return null; // Return null or handle the error in a different way based on your needs
    }
  };
  