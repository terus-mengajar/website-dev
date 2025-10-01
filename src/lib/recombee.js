import recombee from 'recombee-js-api-client';
import { AddUser } from 'recombee.requests';

// console.log(Object.keys(recombee))

export const rqs = { AddUser };
// export const rqs = recombee.requests;
export const client = new recombee.ApiClient(
  process.env.RECOMBEE_DB_ID,      // dari dashboard
  process.env.RECOMBEE_PRIVATE_TOKEN, // pakai private key
  { region: 'ap-se' } // sesuaikan region db kamu
);
