export class futuresMethods {
    constructor(nodeBinanceApiClient, binanceApiNodeClient) {
      this.nodeBinanceApiClient = nodeBinanceApiClient;
      this.binanceApiNodeClient = binanceApiNodeClient;
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
  