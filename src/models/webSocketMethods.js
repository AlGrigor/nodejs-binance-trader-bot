export class webSocketMethods {
  constructor(nodeBinanceApiClient, binanceApiNodeClient) {
    this.nodeBinanceApiClient = nodeBinanceApiClient;
    this.binanceApiNodeClient = binanceApiNodeClient;
  }

  /**
    Subscribe to the WebSocket stream for receiving candlestick data.
    @param {string} symbol - The trading pair symbol (e.g., 'BTCUSDT', 'ETHUSDT').
    @param {string} interval - The interval for the candlesticks (e.g., '1m' for 1 minute).
    @param {function} onData - The callback function to handle incoming candlestick data.
    */
  candles(symbol, interval, onData) {
    symbol = symbol.toUpperCase();
    try {
      this.binanceApiNodeClient.ws.candles(symbol, interval, onData);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async futuresUser() {
    try {
        const futuresUser = await this.binanceApiNodeClient.ws.futuresUser(msg => {
            console.log(msg)
          })
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
