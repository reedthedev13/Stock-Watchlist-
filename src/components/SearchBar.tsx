import React, { useState } from "react";
import type { StockData } from "../types/stock";

interface SearchBarProps {
  onAdd: (stock: StockData) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onAdd }) => {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setError(null);

    try {
      const apiKey = import.meta.env.VITE_TWELVE_DATA_API_KEY;
      const symbol = query.toUpperCase();

      const response = await fetch(
        `https://api.twelvedata.com/quote?symbol=${symbol}&apikey=${apiKey}`
      );
      const data = await response.json();

      if (data.status === "error" || data.message) {
        setError(data.message || "Stock not found");
        setLoading(false);
        return;
      }

      const priceString = data.price ?? data.close ?? data.open;

      if (!priceString || isNaN(Number(priceString))) {
        setError("Invalid data received from API");
        setLoading(false);
        return;
      }

      const stock: StockData = {
        symbol: data.symbol,
        name: data.name || data.symbol,
        price: Number(priceString),
        change: data.percent_change ? Number(data.percent_change) : 0,
      };

      console.log("Data passed to onAdd:", stock);
      onAdd(stock);
    } catch (err) {
      setError("Failed to fetch stock data. Try again later.");
      console.error(err);
    } finally {
      setLoading(false);
      setQuery("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex space-x-2 mb-8">
      <input
        type="text"
        placeholder="Enter stock symbol (e.g. AAPL)"
        value={query}
        onChange={(e) => setQuery(e.target.value.toUpperCase())}
        className="flex-grow px-4 py-2 rounded-md border border-sand bg-navy text-gray-950 placeholder-sand-light focus:outline-none focus:ring-2 focus:ring-sand transition"
        disabled={loading}
      />
      <button
        type="submit"
        disabled={loading}
        className="px-6 py-2 bg-yellow-300 text-gray-900 font-semibold rounded-md shadow hover:bg-yellow-400 disabled:opacity-50 transition"
      >
        {loading ? "Searching..." : "Add"}
      </button>
      {error && (
        <p className="text-red-500 ml-4 self-center font-medium">{error}</p>
      )}
    </form>
  );
};

export default SearchBar;
