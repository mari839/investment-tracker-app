import axios from 'axios';

const API_KEY = 'Y25XWOO25SPPRIJT';
const BASE_URL = 'https://www.alphavantage.co/query';

export const fetchInvestments = async (symbol) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        function: 'TIME_SERIES_DAILY',
        symbol: symbol,
        apikey: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching investment data:', error);
    throw error;
  }
};
