import axios from "axios";

export const getCategories = async () => 
await axios.get(`${import.meta.env.VITE_APP_API_ENDPOINT}/user/categories`);


export const addCategories = async (name,p_id,img) =>{
    await axios.post(`${import.meta.env.VITE_APP_API_ENDPOINT}/admin/category`,{name,p_id,img});
}

export const getOneCategory = async (slug) => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_APP_API_ENDPOINT}/user/category/${slug}`);
      
        return response.data;
        
      } catch (error) {
        console.log("Error fetching products:", error);
        return []; // or handle the error in a different way based on your needs
      }
}

export const deleteCategory = async (slug) => {
  try {
      const response = await axios.delete(`${import.meta.env.VITE_APP_API_ENDPOINT}/admin/category/${slug}`);
    
      return response.data;
      
    } catch (error) {
      console.log("Error fetching products:", error);
      return []; // or handle the error in a different way based on your needs
    }
}