import React from "react";
import StockCard from "./StockCard";
import type { StockData } from "../types/stock";

interface Props {
  stocks: StockData[];
  onRemove: (symbol: string) => void; // ✅ Add this line
}

const Watchlist: React.FC<Props> = ({ stocks, onRemove }) => (
  <div className="space-y-4">
    {stocks.length ? (
      stocks.map((stk) => (
        <StockCard key={stk.symbol} stock={stk} onRemove={onRemove} />
      ))
    ) : (
      <p className="text-gray-400 text-sm">No stocks added yet.</p>
    )}
  </div>
);

export default Watchlist;
