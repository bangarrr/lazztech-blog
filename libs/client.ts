import { createClient } from 'microcms-js-sdk';

export const client = createClient({
    serviceDomain: 'lazztech',
    apiKey: process.env.API_KEY,
});
