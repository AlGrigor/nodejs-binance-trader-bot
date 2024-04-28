export class futuresMethods {
  constructor(nodeBinanceApiClient, binanceApiNodeClient) {
    this.nodeBinanceApiClient = nodeBinanceApiClient;
    this.binanceApiNodeClient = binanceApiNodeClient;
  }

  async futuresTime() {
    try {
      const res = await this.nodeBinanceApiClient.futuresTime();
      return res;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async futureBalance() {
    try {
      const res = await this.nodeBinanceApiClient.futuresBalance();
      return res;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async futuresPrices() {
    try {
      const res = await this.nodeBinanceApiClient.futuresPrices();
      return res;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async futuresExchangeInfo(){
    try {
        const res = await this.nodeBinanceApiClient.futuresExchangeInfo()
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
  async futuresLeverage(symbol, leverage){
    symbol = symbol.toUpperCase();
    try {
        const res = await this.binanceApiNodeClient.futuresLeverage({
            symbol: symbol,
            leverage: leverage,
          })
        return res;
      } catch (error) {
        console.error(error);
        throw error;
      }
  }

}
