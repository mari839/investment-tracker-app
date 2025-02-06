import axios from 'axios';

const BASE_URL = "https://www.alphavantage.co/query";

export const fetchInvestments = async (symbol = "IBM", interval = "5min") => {
  // Retrieve the API key from localStorage
  const apiKey = localStorage.getItem('apiKey');

  if (!apiKey) {
    console.error("API Key is missing. Please set it in the Settings.");
    return []; // Return an empty array if API key is not available
  }

  try {
    const response = await axios.get(BASE_URL, {
      params: {
        function: "TIME_SERIES_INTRADAY", // Time series data
        symbol,                          // The symbol for which we want the data
        interval,                        // The time interval for data (5min, 15min, etc.)
        apikey: apiKey,                  // Dynamic API key from localStorage
      },
    });
    
    if (response.data["Error Message"]) {
      throw new Error(response.data["Error Message"]);
    }
    // Get the time series data from the response
    const timeSeries = response.data["Time Series (5min)"];

    if (!timeSeries) {
      throw new Error("Invalid API response format");
    }

    // Map the time series data into a structured array
    const investmentData = Object.entries(timeSeries).map(([time, data]) => ({
      time,
      open: data["1. open"],
      high: data["2. high"],
      low: data["3. low"],
      close: data["4. close"],
      volume: data["5. volume"],
    }));

    return investmentData; // Return structured investment data
  } catch (error) {
    console.error("Error fetching investment data:", error);
    return []; // Return an empty array on failure
  }
};







// import axios from 'axios';


// const BASE_URL = 'https://api.restful-api.dev/objects';

// export const fetchInvestments = async (symbol) => {
//   try {
//     const response = await axios.get(BASE_URL);
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching investment data:', error);
//     throw error;
//   }
// };
