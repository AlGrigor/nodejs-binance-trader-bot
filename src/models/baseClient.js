import Binance from 'node-binance-api';
import binanceApiNode from 'binance-api-node';

import { webSocketMethods } from './webSocketMethods';
import { connectionMethods } from './connectionMethods';
import { futuresMethods } from './futuresMethods';


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
    this.webSocketMethods = new webSocketMethods(this.nodeBinanceApiClient, this.binanceApiNodeClient);
    this.connectionMethods = new connectionMethods(this.nodeBinanceApiClient, this.binanceApiNodeClient);
    this.futuresMethods = new futuresMethods(this.nodeBinanceApiClient, this.binanceApiNodeClient);

    return BinanceClient.instance;
  }

  //Connection Methods

  async ping(){
    return this.connectionMethods.ping();
  }


  //Futures Methods

  async futuresTime(){
    return this.futuresMethods.futuresTime();
  }

  //WebSocket Methods

  candles(symbol, interval, onData){
    return this.webSocketMethods.candles(symbol, interval, onData)
  }
  
}
