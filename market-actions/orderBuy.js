import { client } from '../api';

export async function orderBuy() {
  try {
    const order = await client.order({
      symbol: 'BTCUSDT',
      side: 'BUY',
      type: 'MARKET',
      quantity: '0.0001', // количество BTC для покупки
    });
    console.log(order);
  } catch (error) {
    console.log('Error: \n', error);
  }
}