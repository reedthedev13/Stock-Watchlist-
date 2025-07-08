import React from "react";
import type { StockData } from "../types/stock";

interface Props {
  stock: StockData;
  onRemove?: (symbol: string) => void;
}

const StockCard: React.FC<Props> = ({ stock, onRemove }) => {
  const changeColor =
    stock.change && stock.change >= 0 ? "text-green-400" : "text-red-400";

  return (
    <div className="bg-[#1C2541] p-4 rounded-lg shadow-md flex justify-between items-center border border-[#33415C] hover:shadow-lg transition-shadow duration-300">
      <div>
        <h3 className="text-lg font-semibold text-[#FFDAB9]">{stock.symbol}</h3>
        <p className="text-sm text-gray-400">{stock.name || "Company Name"}</p>
      </div>
      <div className="text-right">
        <p className="text-[#FBE8D3] font-semibold">
          ${stock.price?.toFixed(2) || "0.00"}
        </p>
        <p className={`text-sm font-medium ${changeColor}`}>
          {stock.change ? `${stock.change.toFixed(2)}%` : "0.00%"}
        </p>
      </div>
      {onRemove && (
        <button
          onClick={() => onRemove(stock.symbol)}
          className="ml-4 text-gray-400 hover:text-[#FFB347] transition-colors duration-300"
          aria-label={`Remove ${stock.symbol}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      )}
    </div>
  );
};

export default StockCard;
