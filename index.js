
import { client } from "./src/initClient";


//client.futuresMarketSell('BNBUSDT', '0.02').then(res => console.log(res))

client.futureBalance().then(res => console.log(res))

//client.futuresUser()