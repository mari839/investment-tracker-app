import React, { useState } from "react";
import useInvestments from "../hooks/useInvestments.js";
import InvestmentCard from "../components/InvestmentCard";

const Investments = () => {
  const { investments, loading, error } = useInvestments("IBM");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12; // 4 cards per row * 3 rows = 12 cards per page

  // Calculate the indices for slicing the investments array
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = investments.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="investments-page">
      <h1 className="investments-title">📈 IBM Stock Data</h1>
      {loading && <p className="loading">Loading investments...</p>}
      {error && <p className="error">{error}</p>}

      {!investments.length ? (
        <p className="no-investments">No investments found.</p>
      ) : (
        <div>
          <div className="investment-list">
            {currentItems.map((inv, index) => (
              <InvestmentCard
                key={index}
                time={inv.time}
                open={inv.open}
                high={inv.high}
                low={inv.low}
                close={inv.close}
                volume={inv.volume}
              />
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="pagination">
            <button
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              ⬅️ Previous
            </button>
            <span> Page {currentPage} </span>
            <button
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={indexOfLastItem >= investments.length}
            >
              Next ➡️
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Investments;
