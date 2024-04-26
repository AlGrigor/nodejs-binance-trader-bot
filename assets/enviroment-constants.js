import { createRequire } from 'module';
const require = createRequire(import.meta.url);

require('dotenv').config();

export const apiKey = process.env.API_KEY;
export const apiSecret = process.env.API_SECRET;
