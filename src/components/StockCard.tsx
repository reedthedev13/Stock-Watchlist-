import React from "react";
import type { StockData } from "../types/stock";


interface Props {
  stock: StockData;
}

const StockCard: React.FC<Props> = ({ stock }) => {
  const changeColor = stock.change && stock.change >= 0 ? "text-green-400" : "text-red-400";

  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow flex justify-between items-center">
      <div>
        <h3 className="text-lg font-bold text-white">{stock.symbol}</h3>
        <p className="text-sm text-gray-400">{stock.name || "Company Name"}</p>
      </div>
      <div className="text-right">
        <p className="text-white font-semibold">${stock.price?.toFixed(2) || "0.00"}</p>
        <p className={`text-sm ${changeColor}`}>
          {stock.change ? `${stock.change.toFixed(2)}%` : "0.00%"}
        </p>
      </div>
    </div>
  );
};

export default StockCard;
