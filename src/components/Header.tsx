const Header = () => (
  <header className="bg-slate-800 py-5 shadow-lg">
    <div className="max-w-4xl mx-auto px-6 flex justify-between items-center">
      <h1 className="text-4xl font-extrabold text-blue-400 tracking-tight leading-none font-mono flex items-center space-x-2">
        <span role="img" aria-label="chart">📈</span>
        <span>Stock Watchlist</span>
      </h1>
      <p className="text-xs sm:text-sm text-gray-400 uppercase tracking-wide select-none">
        Powered by TwelveData
      </p>
    </div>
  </header>
);

export default Header;
