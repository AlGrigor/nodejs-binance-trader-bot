import { client } from '../api';

const orders = [
  {
    symbol: 'BTCUSDT',
    side: 'SELL',
    type: 'MARKET',
    quantity: '0.0001',
  },
];

export async function placeOrdersToBuy() {
  try {
    // Вызов метода futuresBatchOrders
    const response = await client.futuresBatchOrders(orders);
    console.log(response);
  } catch (error) {
    console.error('Error:', error);
  }
}
