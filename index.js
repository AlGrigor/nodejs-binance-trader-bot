
import { client } from "./src/initClient";


client.futuresTime().then(res => console.log(res))