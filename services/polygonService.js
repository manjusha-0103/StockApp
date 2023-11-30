import axios from 'axios';

const apiKey = 'WNhpxssvMPoRbb8EFbplQTIohgyUix3K';

export const fetchStocks = async (n) => {
  try {
    const response = await axios.get(`https://api.polygon.io/v3/reference/tickers`, {
      params: {
        apiKey,
        perpage: n,
      },
    });
    console.log(response.data)
    return response.data.results;
  } catch (error) {
    console.error('Error fetching stocks:', error.message);
    throw error;
  }
};