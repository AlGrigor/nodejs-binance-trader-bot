import { BinanceClient } from "./models/baseClient";
import { apiKey,apiSecret } from "./assets/keys";

export const client = new BinanceClient(apiKey, apiSecret)