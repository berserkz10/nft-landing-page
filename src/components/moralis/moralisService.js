import Moralis from "moralis";
import { MORALIS_API } from "../../config";

let moralisStarted = false;
export const loadCollections = async () => {
  try {
    
    if (!moralisStarted) {
      await Moralis.start({
        apiKey:
          MORALIS_API,
      });
      moralisStarted = true;
    }

    const response =
      await Moralis.EvmApi.marketData.getTopNFTCollectionsByMarketCap({});
    //console.log(response.raw)
    const top9 = response.raw.slice(0, 9);
    console.log(top9);
    return top9;
  } catch (e) {
    console.error(e);
  }
};
