import axios from "axios";
export const openSea = async () => {
  const options = {
    method: "GET",
    url: "https://api.opensea.io/api/v2/collections",
   /* params: {
      offset: 0,
      limit: 4, // 👈 limit passed as a query param
    },*/
    headers: {
      accept: "application/json",
      "X-API-KEY": "e2a6ec473fc14414a1b03fe90bd99f3e",
    },
  };
  const res = await axios.request(options);
  console.log(res.data.collections);
  return res.data.collections;
};
