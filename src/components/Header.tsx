import { motion } from "framer-motion";

const Header = () => (
  <motion.header
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className="bg-[#1C2541] py-5 shadow-md"
  >
    <div className="max-w-4xl mx-auto px-6 flex justify-between items-center">
      <h1 className="text-3xl font-bold text-yellow-300 font-mono tracking-tight hover:text-[#A8915B] transition duration-300">
        <span role="img" aria-label="chart" className="mr-1">📈</span>
        Stock Watchlist
      </h1>
      <p className="text-sm text-gray-400 uppercase tracking-wide select-none hover:text-[#FFDAB9] transition duration-300">
        Powered by TwelveData
      </p>
    </div>
  </motion.header>
);

export default Header;