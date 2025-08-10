import { useState, useEffect } from "react";
import styled from "styled-components";
import { openSea } from "./moralis/openSea";
import ColoredCircle from "./ColoredCircle";
const SectionHolder = styled.section`
  position: relative;
  height: 640px;
  width: 100%;
  // border: white solid 1px;
  padding: 0px 115px 0px 115px;
  @media (max-width: 1000px) {
    height: 1129px;
    height: 2094px;
  }
  @media (max-width: 570px) {
    height: 2094px;
  }
`;
const NftHeader = styled.h1`
  font-size: 96px;
  font-weight: 700;
  line-height: 80px;
  background: linear-gradient(to right, #0500fa, #e01e5a);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
  display: inline-block;
  z-index: -1;
`;
const ContentContainer = styled.section`
  position: absolute;
  z-index: 1;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  //border: 1px solid white;
  padding: 0px 115px 0px 115px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  h3 {
    font-size: 44px;
    font-weight: 500;
    @media (max-width: 500px) {
      font-size: 31px;
    }
  }
`;
const CardContainer = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  border-radius: 8px;
  padding: 7px;
  gap: 5px;
  @media (max-width: 1000px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }
  @media (max-width: 570px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
const Cards = styled.div`
  width: 24%;
  height: 420px;
  background-color: #1e1b33;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  padding: 14px;
  @media (max-width: 1000px) {
    width: 288px;
    height: 499px;
  }
  @media (max-width: 600px) {
    width: 264px;
    height: 491px;
    p {
      font-size: 14px;
    }
  }
  @media (max-width: 570px) {
    width: 288px;
    height: 499px;
    p {
      font-size: 14px;
    }
  }
  @media (max-width: 570px) {
    h3 {
      font-size: 24px !important;
    }
    p {
      font-size: 16px !important;
    }
  }

  > img {
    width: 100%;
    height: 220px;
    border-radius: 8px;
  }
  > div {
    height: 83px;
    display: flex;
    justify-content: space-between;
  }
  div:nth-of-type(1) {
    flex-direction: column;
    justify-content: space-around;
  }
`;
const InfoContainer = styled.div`
  border: 0.5px #ffffff45 solid;
  display: flex;
  width: 100%;
  align-self: center;
  padding: 0px 10px;
  border-radius: 8px;
  section {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
  }
  section:nth-of-type(2) {
  }
`;

const TrendingNfts = () => {
  const [collections, setCollection] = useState([]);
  const fourNfts = (res) => {
    const result = [];
    for (let i = 0; i < res.length; i++) {
      const nft = res[i];

      // Skip items without image or with a name that's a wallet address
      if (!nft.image_url) continue;

      const isWalletAddress = nft.name?.startsWith("0x");

      if (!isWalletAddress) {
        result.push(nft);
      }

      if (result.length === 4) break;
    }
    return result;
  };

  useEffect(() => {
    const fetchCollections = async () => {
      const res = await openSea(); // this should return an array
      const firstFourWithImages = fourNfts(res);
      setCollection(firstFourWithImages);
    };
    fetchCollections();
  }, []);
  //
  useEffect(() => {
    console.log("Updated collections:", collections);
  }, [collections]);
  return (
    <SectionHolder id="section-container" className="componentHolder">
      <NftHeader>NFTs</NftHeader>
      <ColoredCircle $top="0px" $right="0px" />
      <ContentContainer id="section-container">
        <h3>Trending NFTs</h3>
        <CardContainer>
          {collections.map((item, index) => (
            <Cards key={index}>
              <img src={item.image_url || "/fallback.png"} alt={item.name} />
              <div>
                <p>By {item.creator?.user?.username || "Unknown Creator"}</p>{" "}
                {/* fallback if undefined */}
                <h4>{item.name}</h4>
              </div>
              <InfoContainer>
                <section>
                  <span>From</span>
                  <p>
                    {item.stats?.floor_price
                      ? `${item.stats.floor_price} ETH`
                      : "Not for sale"}
                  </p>
                </section>
                <section>
                  <span>Highest bid</span>
                  <p>
                    {item.stats?.total_volume
                      ? `${item.stats.total_volume.toFixed(2)} ETH`
                      : "No bids"}
                  </p>
                </section>
              </InfoContainer>
            </Cards>
          ))}
        </CardContainer>
      </ContentContainer>
    </SectionHolder>
  );
};
export default TrendingNfts;
