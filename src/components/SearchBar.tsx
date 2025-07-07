import React, { useState } from "react";
import axios from "axios";
import type { StockData } from "../types/stock";

interface SearchBarProps {
  onAdd: (stock: StockData) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onAdd }) => {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const API_KEY = import.meta.env.VITE_TWELVE_DATA_API_KEY;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        `https://api.twelvedata.com/quote?symbol=${query.toUpperCase()}&apikey=${API_KEY}`
      );

      const data = response.data;

      // ✅ Updated check
      if (data && !data.status && data.close) {
        const stock: StockData = {
          symbol: data.symbol,
          name: data.name || data.symbol,
          price: parseFloat(data.close),
          change: parseFloat(data.percent_change),
        };

        onAdd(stock);
      } else {
        setError("Stock not found or invalid symbol");
      }
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
        placeholder="Search symbol (AAPL)"
        value={query}
        onChange={(e) => setQuery(e.target.value.toUpperCase())}
        className="flex-grow px-4 py-2 rounded-md border border-[#374151] bg-[#1F2937] text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        disabled={loading}
      />
      <button
        type="submit"
        disabled={loading}
        className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-md text-white font-semibold disabled:opacity-50"
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
