import { useState, useEffect } from "react";
import { fetchInvestments } from "../utils/api";

const useInvestments = () => {
  const [investments, setInvestments] = useState([]); // ✅ Default empty array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getInvestments = async () => {
      try {
        const data = await fetchInvestments();
        console.log("API Response:", data); // ✅ Log API response

        if (Array.isArray(data)) {
          setInvestments(data); // ✅ Set data if it's an array
        } else if (data && data.investments) {
          setInvestments(data.investments); // ✅ Handle nested structure
        } else {
          throw new Error("Invalid API response format");
        }
      } catch (err) {
        setError("Failed to load investments.");
      } finally {
        setLoading(false);
      }
    };

    getInvestments();
  }, []);

  return { investments, loading, error };
};

export default useInvestments;
