import React from "react";

const InvestmentCard = ({ name, amount }) => {
  return (
    <div className="investment-card">
      <h3>{name}</h3>
      <p>Amount: ${amount}</p>
    </div>
  );
};

export default InvestmentCard; // ✅ Must have this
