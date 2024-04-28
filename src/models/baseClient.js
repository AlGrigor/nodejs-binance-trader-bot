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
    this.webSocketMethods = new webSocketMethods(
      this.nodeBinanceApiClient,
      this.binanceApiNodeClient
    );
    this.connectionMethods = new connectionMethods(
      this.nodeBinanceApiClient,
      this.binanceApiNodeClient
    );
    this.futuresMethods = new futuresMethods(
      this.nodeBinanceApiClient,
      this.binanceApiNodeClient
    );

    return BinanceClient.instance;
  }

  //Connection Methods

  async ping() {
    return this.connectionMethods.ping();
  }

  //Futures Methods

  futuresTime() {
    return this.futuresMethods.futuresTime();
  }

  futuresPrices() {
    return this.futuresMethods.futuresPrices();
  }

  futureBalance() {
    return this.futuresMethods.futureBalance();
  }

  futuresExchangeInfo() {
    return this.futuresMethods.futuresExchangeInfo();
  }

  async futuresMarketBuy(symbol, amount) {
    symbol = symbol.toUpperCase();
    try {
      const res = await this.nodeBinanceApiClient.futuresMarketBuy(
        symbol,
        amount
      );
      return res;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async futuresMarketSell(symbol, amount) {
    symbol = symbol.toUpperCase();
    try {
      const res = await this.nodeBinanceApiClient.futuresMarketSell(
        symbol,
        amount
      );
      return res;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async futuresAllOrders() {
    try {
      const res = await this.nodeBinanceApiClient.futuresAllOrders();
      return res;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  

  async futuresCancel(symbol, id) {
    symbol = symbol.toUpperCase();
    try {
      const res = await this.nodeBinanceApiClient.futuresCancel( symbol, {orderId: id} )
      return res;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  /**
   * Set the leverage for a futures trading pair.
   * @param {string} symbol - The symbol of the trading pair (e.g., BTCUSDT, ETHUSDT).
   * @param {number} leverage - The leverage to set for the trading pair.
   */
  futuresLeverage(symbol, leverage) {
    return this.futuresMethods.futuresLeverage(symbol, leverage);
  }

  //WebSocket Methods

  candles(symbol, interval, onData) {
    return this.webSocketMethods.candles(symbol, interval, onData);
  }

  futuresUser() {
    return this.webSocketMethods.futuresUser();
  }
}
