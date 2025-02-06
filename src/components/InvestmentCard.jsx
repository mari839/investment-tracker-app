import React from "react";
import "../styles/components/investment-card.scss";

const InvestmentCard = ({ time, open, high, low, close, volume }) => (
  <div className="investment-card">
    <h3>{time}</h3>
    <div className="investment-details">
      <p>Open: {open}</p>
      <p>High: {high}</p>
      <p>Low: {low}</p>
      <p>Close: {close}</p>
      <p>Volume: {volume}</p>
    </div>
  </div>
);

export default InvestmentCard;

