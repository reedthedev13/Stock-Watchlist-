export default async function handler(req: any, res: any) {
   console.log("API handler called with query:", req.query)
  const symbol = req.query?.symbol;

  if (!symbol) {
    return res.status(400).json({ error: "Missing symbol" });
  }

  const apiKey = process.env.TWELVE_API_KEY;
  if (!apiKey) {
    console.error("Missing TWELVE_API_KEY in environment variables");
    return res.status(500).json({ error: "Internal server error" });
  }

  try {
    // Call the real Twelve Data API, not your own API route
    const response = await fetch(
      `https://api.twelvedata.com/quote?symbol=${symbol}&apikey=${apiKey}`
    );

    const data = await response.json();

    console.log("Twelve Data API response:", data);

    if (data.status === "error") {
      return res.status(400).json({ error: data.message });
    }

    console.log("Twelve Data API response:", data);

    const price = data.price ?? data.close ?? data.open;
    if (!price) {
      return res.status(400).json({ error: "Price data not available" });
    }

    return res.status(200).json({
      symbol: data.symbol,
      name: data.name || data.symbol,
      price,
      percent_change: data.percent_change ?? 0,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server error" });
  }
}
