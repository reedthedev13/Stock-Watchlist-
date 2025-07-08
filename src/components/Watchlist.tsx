import React from "react";
import StockCard from "./StockCard";
import type { StockData } from "../types/stock";

interface Props {
  stocks: StockData[];
  onRemove: (symbol: string) => void;
}

const Watchlist: React.FC<Props> = ({ stocks, onRemove }) => (
  <div className="space-y-4 max-w-md mx-auto">
    {stocks.length ? (
      stocks.map((stock) => (
        <StockCard key={stock.symbol} stock={stock} onRemove={onRemove} />
      ))
    ) : (
      <p className="text-gray-400 text-center">No stocks added yet.</p>
    )}
  </div>
);

export default Watchlist;
