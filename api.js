import Binance from 'binance-api-node';
import { apiKey, apiSecret } from './assets/enviroment-constants';

export const client = Binance({
  apiKey: apiKey,  
  apiSecret: apiSecret,
  getTime: () => Date.now(),
});