import axios from 'axios';

export const currentUser = async (token) => {

      const response = await axios.post(
        `${import.meta.env.VITE_APP_API_ENDPOINT}/auth/current-user`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response;

  };

  export const currentAdmin = async (token) => {

      const response = await axios.post(
        `${import.meta.env.VITE_APP_API_ENDPOINT}/auth/admin-user`,
        null, // no data to send in the body
        {
          headers: {
            Authorization: `Bearer ${token}`, // Include the token in the Authorization header
          },
        }
      );
      return response.data; // Return the response data

  };
  