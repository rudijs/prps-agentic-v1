// Install dependencies if needed: npm install node-fetch
// But for modern Node.js (v18+), fetch is built-in.
// For date handling, this uses vanilla Date; no external libs required.

interface PriceDataPoint {
  timestamp: Date;
  price: number;
  sma_10?: number;
}

async function fetchAndProcess(
  fetcher: typeof fetch,
  coinId: string = "chutes",
  vsCurrency: string = "usd",
  days: number = 1,
): Promise<PriceDataPoint[] | null> {
  const url = `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${vsCurrency}&days=${days}`;

  try {
    const response = await fetcher(url);
    if (!response.ok) {
      console.error(
        "Error fetching data:",
        response.status,
        response.statusText,
      );
      return null;
    }

    const data = await response.json();
    const prices: [number, number][] = data.prices; // [[timestamp_ms, price], ...]
    if (!prices || prices.length === 0) {
      console.log("No data returned.");
      return null;
    }

    // Convert to array of objects with Date
    const priceData = prices.map(([ts, price]) => ({
      timestamp: new Date(ts),
      price,
    }));

    // Sort by timestamp (should already be sorted, but ensure)
    priceData.sort((a, b) => a.timestamp.getTime() - b.timestamp.getTime());

    // Resample to 30-min intervals: Group into buckets and take last price in each
    const resampled: PriceDataPoint[] = [];
    let currentBucketStart = new Date(
      Math.floor(priceData[0].timestamp.getTime() / (30 * 60 * 1000)) *
        (30 * 60 * 1000),
    );
    let bucketEnd = new Date(currentBucketStart.getTime() + 30 * 60 * 1000);
    let bucketPrices: { timestamp: Date; price: number }[] = [];

    for (const entry of priceData) {
      while (entry.timestamp >= bucketEnd) {
        if (bucketPrices.length > 0) {
          resampled.push({ ...bucketPrices[bucketPrices.length - 1] }); // Last as close
        }
        currentBucketStart = bucketEnd;
        bucketEnd = new Date(currentBucketStart.getTime() + 30 * 60 * 1000);
        bucketPrices = [];
      }
      bucketPrices.push(entry);
    }
    if (bucketPrices.length > 0) {
      resampled.push({ ...bucketPrices[bucketPrices.length - 1] });
    }

    // Compute example indicator: 10-period SMA (~5 hours)
    resampled.forEach((entry, index) => {
      const start = Math.max(0, index - 9); // window=10
      const slice = resampled.slice(start, index + 1);
      const sum = slice.reduce((acc, p) => acc + p.price, 0);
      entry.sma_10 = sum / slice.length;
    });

    return resampled;
  } catch (error) {
    console.error("An error occurred during data processing:", error);
    return null;
  }
}

// Example usage: Fetch and print latest
(async () => {
  // Ensure fetch is available in the global scope or import it if running in an environment
  // where it's not (e.g., Node.js < 18 without a polyfill like node-fetch).
  const globalFetch = typeof fetch !== "undefined" ? fetch : undefined;

  if (!globalFetch) {
    console.error(
      "Error: 'fetch' is not defined. Please ensure you are running in a compatible environment (e.g., Node.js v18+ or a browser) or install a polyfill like 'node-fetch'.",
    );
    return;
  }

  const result = await fetchAndProcess(globalFetch);
  if (result) {
    console.table(result.slice(-5)); // Last 5 30-min closes with SMA

    // For persistent storage (e.g., append to JSON/CSV), use fs module
    // Example: const fs = require('fs');
    // fs.appendFileSync('chutes_30min_closes.json', JSON.stringify(result) + '\n');
  }
})();
