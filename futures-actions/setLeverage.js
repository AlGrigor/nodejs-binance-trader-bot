import { client } from '../api';

/**
 * Set the leverage for a futures trading pair.
 * @param {string} symbol - The symbol of the trading pair (e.g., BTCUSDT, ETHUSDT).
 * @param {number} leverage - The leverage to set for the trading pair.
 */

export async function setLeverage(symbol, leverage) {
  symbol = symbol.toUpperCase();
  try {
    const res = await client.futuresLeverage({
      symbol: symbol,
      leverage: leverage,
    });

    console.log(res);
  } catch (error) {
    console.log('Error to set leverage:', error);
  }
}
