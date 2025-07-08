import { useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Watchlist from "./components/Watchlist";
import type { StockData } from "./types/stock";

const App = () => {
  const [watchlist, setWatchlist] = useState<StockData[]>([]);

  const handleAdd = (stock: StockData) => {
    // Normalize symbol to avoid duplicates with different casing/spaces
    const normalizedSymbol = stock.symbol.trim().toUpperCase();
    if (!watchlist.some((s) => s.symbol.trim().toUpperCase() === normalizedSymbol)) {
      setWatchlist([{ ...stock, symbol: normalizedSymbol }, ...watchlist]);
    }
  };

  const handleRemove = (symbol: string) => {
    setWatchlist((prev) => prev.filter((stock) => stock.symbol !== symbol));
  };

  return (
    <div className="min-h-screen bg-[#0B132B] text-[#FBE8D3]">
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <SearchBar onAdd={handleAdd} />
        <Watchlist stocks={watchlist} onRemove={handleRemove} />
      </main>
    </div>
  );
};

export default App;
