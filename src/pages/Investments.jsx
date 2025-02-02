import React from "react";
import useInvestments from "../hooks/useInvestments";
import InvestmentCard from "../components/InvestmentCard";

const Investments = () => {
  const { investments, loading, error } = useInvestments();

  return (
    <div className="investments-page">
      <h1>📈 Your Investments</h1>

      {loading && <p>Loading investments...</p>}
      {error && <p className="error">{error}</p>}

      {!Array.isArray(investments) || investments.length === 0 ? (
        <p>No investments found.</p>
      ) : (
        <div className="investment-list">
          {investments.map((inv, index) => (
            <InvestmentCard key={index} name={inv.name} amount={inv.amount} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Investments;
