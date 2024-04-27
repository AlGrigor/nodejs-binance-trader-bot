import { client } from '../api';
import { getUserBalanceByCoin } from '../utils/getUserBalanceByCoin';

/**
 * Place a market sell order for a specified cryptocurrency pair.
 * @param {string} coinBase - The base cryptocurrency symbol (e.g., BTC, ETH).
 * @param {string} coinSecond - The secondary cryptocurrency symbol (e.g., USDT, BTC).
 * @param {string} [amount] - The amount of `coinBase` to sell. If not provided, the entire balance of `coinBase` will be sold.
 */

export async function orderSell(coinBase, coinSecond, amount) {
    coinBase = coinBase.toUpperCase()
    coinSecond = coinSecond.toUpperCase()

  try {
    const order = await client.order({
      symbol: coinBase + coinSecond,
      side: 'SELL',
      type: 'MARKET',
      quantity: amount ? amount : await getUserBalanceByCoin(coinBase),
    });
    console.log(order);
  } catch (error) {
    console.log('Error: \n', error);
  }
}