import styled from "styled-components";
const SectionHolder = styled.section`
  position: relative;
  height: 640px;
  width: 100%;
  border: white solid 1px;
  padding: 0px 115px 0px 115px;
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
  border: 1px solid white;
  padding: 0px 115px 0px 115px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  h3 {
    font-size: 44px;
    font-weight: 500;
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
  return (
    <SectionHolder>
      <NftHeader>NFTs</NftHeader>
      <ContentContainer>
        <h3>Trending NFTs</h3>
        <CardContainer>
          <Cards>
            <img src="/trending.png" alt="" />
            <div>
              <p>By Ya Chin-Ho</p>
              <h4>Venture Capitalist</h4>
            </div>
            <InfoContainer>
              <section>
                <span>From</span>
                <p>Not for sale</p>
              </section>
              <section>
                <span>Highest bid</span>
                <p>2.835 ETH</p>
              </section>
            </InfoContainer>
          </Cards>
          <Cards></Cards>
          <Cards></Cards>
          <Cards></Cards>
        </CardContainer>
      </ContentContainer>
    </SectionHolder>
  );
};
export default TrendingNfts;
