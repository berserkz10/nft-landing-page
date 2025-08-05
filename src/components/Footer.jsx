import styled from "styled-components";
import ColoredCircle from "./ColoredCircle";
const SectionHolder = styled.footer`
  width: 100%;
  height: 541px;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column-reverse;
`;
const ContentHolder = styled.div`
  display: flex;
  position: absolute;
  padding: 115px 115px 0px 115px;
  width: 100%;
  height: 100%;
  h5 {
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 35px;
  }
  p {
    font-size: 16px;
    font-weight: 400;
    color: #ffffffc3;
    margin-bottom: 5px;
  }
`;

const FooterInnerDiv = styled.div`
  width: 23%;
`;
const FooterSection = ({ title, items }) => {
  return (
    <FooterInnerDiv>
      <h5>{title}</h5>
      {items.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </FooterInnerDiv>
  );
};
const MarketPlaceHolder = styled.div`
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  padding-bottom: 179px;
  justify-content: space-between;
  div:nth-of-type(1) {
    display: flex;
    height: 58px;
  }
  button {
    height: 58px;
    width: 131px;
    border-radius: 0px 8px 8px 0px;
  }
  input {
    width: 240px;
    height: 58px;
    background-color: #1e1b33;
    border: none;
    padding-left: 10px;
    border-radius: 8px 0px 0px 8px;
  }
  div:nth-of-type(2) {
    display: flex;
    img {
      width: 32px;
      height: 32px;
    }
  }
`;

const ReservedRights = styled.div`
  height: 80px;
  width: 100%;
  background-color: #1e1b33;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 115px;
  > div {
    display: flex;
    gap: 30px;
  }
  > p {
    color: #c0c0c0;
  }
`;
const Footer = () => {
  return (
    <SectionHolder>
      <ColoredCircle $bottom="-150px" $right="-150px" />
      <ContentHolder>
        <FooterSection
          title="Marketplace"
          items={[
            "Explore",
            "Help Center",
            "Become a Partner",
            "About Us",
            "Platform Status",
          ]}
        />
        <FooterSection
          title="Community"
          items={[
            "Profile",
            "Favorites ",
            "WatchList",
            "My Collections",
            "Rankings",
            "Activity",
          ]}
        />
        <FooterSection
          title="Categories"
          items={[
            "Arts",
            " Collectibles",
            "Games",
            "Sports",
            "Trading Cards",
            "Photography",
          ]}
        />
        <MarketPlaceHolder>
          <h5>Marketplace</h5>
          <p>
            If you’re an NFT enthusiast or are looking to download our NFT App.
          </p>
          <div>
            <input type="email" placeholder="Type Your Email" />
            <button className="cardsBtns">Subscribe</button>
          </div>
          <div>
            <img src="/icons/Facebook.png" alt="" />
            <img src="/icons/Twitter.png" alt="" />
            <img src="/icons/insta.png" alt="" />
            <img src="/icons/LinkedIn.png" alt="" />
          </div>
        </MarketPlaceHolder>
      </ContentHolder>
      <ReservedRights>
        <div>
          <p>Privacy Policy</p>
          <p>License</p>
          <p>API</p>
        </div>
        <p>@ 2021 All rights reserved</p>
      </ReservedRights>
    </SectionHolder>
  );
};
export default Footer;
