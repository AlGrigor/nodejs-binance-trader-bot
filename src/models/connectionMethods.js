export class connectionMethods {
  constructor(nodeBinanceApiClient, binanceApiNodeClient) {
    this.nodeBinanceApiClient = nodeBinanceApiClient;
    this.binanceApiNodeClient = binanceApiNodeClient;
  }

  async ping() {
    try {
      const res = await this.binanceApiNodeClient.ping();
      return res;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
