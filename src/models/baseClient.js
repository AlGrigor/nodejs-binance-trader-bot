import Binance from 'node-binance-api';
import binanceApiNode from 'binance-api-node';


export class BinanceClient {
  constructor(apiKey, apiSecret) {
    if (!BinanceClient.instance) {
      this.nodeBinanceApiClient = new Binance().options({
        APIKEY: apiKey,
        APISECRET: apiSecret,
      });
      this.binanceApiNodeClient = binanceApiNode({
        apiKey: apiKey,
        apiSecret: apiSecret,
        getTime: () => Date.now(),
      });
      BinanceClient.instance = this;
    }

    return BinanceClient.instance;
  }

  async ping(){
    try {
        const res = await this.binanceApiNodeClient.ping();
        return res
    } catch (error) {
        console.error(error);
      throw error;
    }
  }

  async futuresTime(){
    try {
        const res = await this.nodeBinanceApiClient.futuresTime()
        return res
    } catch (error) {
        console.error(error);
      throw error;
    }
  }


  
}
