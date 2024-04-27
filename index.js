
const Binance = require('binance-api-node').default
const express = require('express');
const app = express();

const client = Binance({
  apiKey: 'I84xXKo4lIgx65eW1bcs1gSkYCLirWk16p3pvIaIBOjvnYXtlNpYkmP6QHFAl62b',
  
  apiSecret: '8YJd6187QEPfvOimmXVxJar8Rw0tUGn4s2XEMNvPLSgz0cTJ6Rlwc06p1aVYPrTO',
  getTime: () => Date.now(),
});


async function getData() {
  try {
    const data = await client.accountInfo();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}

getData();