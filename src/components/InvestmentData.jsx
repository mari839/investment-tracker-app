// src/components/InvestmentData.jsx
import React, { useState, useEffect } from 'react';
import { fetchInvestments } from '../utils/api';

const InvestmentData = ({ symbol }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchInvestments(symbol);
        setData(result);
      } catch (err) {
        setError('Failed to fetch data.');
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [symbol]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Investment Data for {symbol}</h2>
      {/* Render your data here */}
    </div>
  );
};

export default InvestmentData;
