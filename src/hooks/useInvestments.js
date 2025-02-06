import { useState, useEffect } from "react";
import { fetchInvestments } from "../utils/api";

const useInvestments = (symbol = "IBM") => {
  const [investments, setInvestments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getInvestments = async () => {
      try {
        const data = await fetchInvestments(symbol);
        console.log("Fetched Data:", data);

        if (data.length > 0) {
          setInvestments(data);
        } else {
          setError("No investment data available.");
        }
      } catch (err) {
        setError("Failed to load investments.");
      } finally {
        setLoading(false);
      }
    };

    getInvestments();
  }, [symbol]); 

  return { investments, loading, error };
};

export default useInvestments;










// import { useState, useEffect } from "react";
// import { fetchInvestments } from "../utils/api";

// const useInvestments = () => {
//   const [investments, setInvestments] = useState([]); 
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const getInvestments = async () => {
//       try {
//         const data = await fetchInvestments();
//         console.log("API Response:", data); 

//         if (Array.isArray(data)) {
//           setInvestments(data); 
//         } else if (data && data.investments) {
//           setInvestments(data.investments); // 
//         } else {
//           throw new Error("Invalid API response format");
//         }
//       } catch (err) {
//         setError("Failed to load investments.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     getInvestments();
//   }, []);

//   return { investments, loading, error };
// };

// export default useInvestments;
