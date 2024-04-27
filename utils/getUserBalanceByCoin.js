import { client } from '../api';

export async function getUserBalanceByCoin(coin) {
  coin = coin.toUpperCase();
  try {
    const accountInfo = await client.accountInfo();

    if (accountInfo.balances.length > 0) {
      const coinBalance = accountInfo.balances.find(
        (item) => item.asset.toUpperCase() === coin
      );

      if (coinBalance) {
        return coinBalance.free;
      } else {
        return `No balance found for ${coin}`;
      }
    }
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
}