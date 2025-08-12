import axios from "axios";
import { OPENSEA_API } from "../../config";
const openSea = async () => {
  
  const options = {
    method: "GET",
    url: "https://api.opensea.io/api/v2/collections",
    params: {
      limit: 100, // 👈 limit passed as a query param
    },
    headers: {
      accept: "application/json",
      "X-API-KEY": OPENSEA_API,
    },
  };
  const res = await axios.request(options);
  console.log("collections before sorting:", res.data.collections);
  return res.data.collections;
};
const notableDrops = async () => {
  const options = {
    method: "GET",
    url: "https://api.opensea.io/api/v2/events",
    headers: {
      accept: "application/json",
      "X-API-key": "e2a6ec473fc14414a1b03fe90bd99f3e",
    },
  };
  const res = await axios.request(options);
  console.log(res.data.asset_events);
  return res.data.asset_events;
};

export { openSea, notableDrops };
