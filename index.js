import { cli } from "webpack";
import { client } from "./src/initClient";


client.futuresTime().then(res => console.log(res))

client.wsCandles('btcusdt', '1m', candles => {
    console.log(candles);
    client.futuresTime().then(res => console.log('futures time is: ',res))
})