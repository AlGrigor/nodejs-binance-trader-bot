import { client } from './api';

import { orderBuy } from './market-actions/orderBuy';
import { orderSell } from './market-actions/orderSell';
import { getUserBalanceByCoin } from './utils/getUserBalanceByCoin';

//orderBuy();

//orderSell('btc', 'usdt', '0.0001');

async function getBTCBalance(){
  try {
    const balance = await getUserBalanceByCoin('btc');
    console.log(balance);
  } catch (error) {
    console.error('Error:', error);
  }  
}
getBTCBalance();
