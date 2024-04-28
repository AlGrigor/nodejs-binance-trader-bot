import { client } from "../api";

export async function getFutureBalance(){
    try{
        const futureBalance = await client.futuresAccountBalance();
        console.log(futureBalance);
    }
    catch(error){
        console.error('Get Future Balance Error:', error)
    }
}