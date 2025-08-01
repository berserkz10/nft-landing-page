import Moralis from "moralis";
let moralisStarted = false
export const loadCollections = async () => {
  try {
    if (!moralisStarted) {
      await Moralis.start({ apiKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6IjgxYTI4OGFkLTFjMmQtNDZhNS1hNGFhLTQyNDM0OGNkOGQ0NCIsIm9yZ0lkIjoiNDU5NDY4IiwidXNlcklkIjoiNDcyNzA5IiwidHlwZUlkIjoiNTlhNjI3ZjUtZmJmZC00MmM4LWFjZTgtNDY0MWFiNDdhOWQzIiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3NTI1ODczMTIsImV4cCI6NDkwODM0NzMxMn0.N6hrEX3jILYGnX6Yxe4EyK2BlpVURADWceE2J47Evys" });
      moralisStarted = true;
    }

    const response =
      await Moralis.EvmApi.marketData.getTopNFTCollectionsByMarketCap({});
      //console.log(response.raw)
      const top9 = response.raw.slice(0,9)
      console.log(top9)
    return(top9)

  } catch (e) {
    console.error(e);
  }
};
