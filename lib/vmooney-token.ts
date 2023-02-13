/*
⚠ WARNING ⚠ 
DO NOT CHANGE THIS FILE BEFORE YOU'VE FINISHED THE TUTORIAL, 
IT WILL COUNT AGAINST YOUR FINAL ASSESMENT
*/

import moment from "moment"; // convert unix time => moment.unix();
import { createClient } from "urql";
const subgraphClient: any = createClient({
  url: "https://api.studio.thegraph.com/query/38443/vmooney/v0.1.834",
});

//query handler
async function querySubgraph(query: string) {
  const res = await subgraphClient.query(query).toPromise();
  return res.data;
}

//get vmooney holders
export async function getHolders() {
  const now = new Date().getTime() / 1000;
  const data = await querySubgraph(`
    query {
        holders(first:1000, orderBy: initialLock, orderDirection: asc,  where: {locktime_gt: ${Math.round(
          now
        )}}){
                id
                totalLocked
                locktime
                initialLock
          }
    }
    `);
  return data.holders;
}

/*
⚠ WARNING ⚠ 
DO NOT CHANGE THIS FILE BEFORE YOU'VE FINISHED THE TUTORIAL, 
IT WILL COUNT AGAINST YOUR FINAL ASSESMENT
*/
