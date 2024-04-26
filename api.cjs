
//const { apiKey, apiSecret } = require("./assets/enviroment-constants.js");

const Binance = require('binance-api-node').default

// Authenticated client, can make signed calls
const client = Binance({
  apiKey: 'I84xXKo4lIgx65eW1bcs1gSkYCLirWk16p3pvIaIBOjvnYXtlNpYkmP6QHFAl62b',
  apiSecret: '8YJd6187QEPfvOimmXVxJar8Rw0tUGn4s2XEMNvPLSgz0cTJ6Rlwc06p1aVYPrTO',
  getTime: () => Date.now(),
})