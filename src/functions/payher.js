import axios from 'axios';

export const payHereSubmit = async (token,currency) => {

      const response = await axios.post(
        `${import.meta.env.VITE_APP_API_ENDPOINT}/user/payhere`,
        {currency},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;

  };
