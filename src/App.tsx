import { useState,  } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Watchlist from "./components/Watchlist";
import type { StockData } from "./types/stock";

const App = () => {
  const [watchlist, setWatchlist] = useState<StockData[]>([]);

  const handleAdd = (stock: StockData) => {
    if (!watchlist.some((s) => s.symbol === stock.symbol)) {
      setWatchlist([stock, ...watchlist]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <SearchBar onAdd={handleAdd} />
        <Watchlist stocks={watchlist} />
      </main>
    </div>
  );
};

export default App;
