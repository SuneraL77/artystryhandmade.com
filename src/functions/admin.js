import axios from "axios";
import toast from "react-hot-toast";

export const getUsers = async (sort, order, page) => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_APP_API_ENDPOINT}/admin/users`, { sort, order, page });
    
      return response.data;
      
    } catch (error) {
      console.log("Error fetching products:", error);
      return []; // or handle the error in a different way based on your needs
    }
  };
  
  export const getUserCount = async () =>{

    const response = await axios.get(`${import.meta.env.VITE_APP_API_ENDPOINT}/admin/users/count`);
    
    return response.data
  }
  export const searchUsers = async (query) => {
    const response = await axios.post(`${import.meta.env.VITE_APP_API_ENDPOINT}/admin/users/search`,{query});
    
    return response.data
  }

  export const changeUserRole = async (userId,role, token) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_APP_API_ENDPOINT}/admin/update/user`,
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



  export const getCountryIp = async () => {
    try {
      const response = await axios.get("'https://ipapi.co/json/");
      console.log("===>", response);
      return response.data;
    } catch (error) {
      console.error(error);
      toast.error(error?.response?.data?.error?.message);
      return {}; // or handle the error in a different way based on your needs
    }
  };
  