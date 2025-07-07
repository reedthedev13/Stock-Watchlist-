import twelvedata from "twelvedata";
import type { StockData } from "../types/stock";

const client = twelvedata({ key: import.meta.env.VITE_TWELVEDATA_KEY });

export async function getQuote(symbol: string): Promise<StockData | null> {
  try {
    const res = await client.quote({ symbol });
    if (res.status === "ok") {
      const price = parseFloat(res.close);
      const change = parseFloat(res.percent_change);
      return { symbol, name: res.name, price, change };
    }
  } catch (e) {
    console.error("Quote error", e);
  }
  return null;
}
