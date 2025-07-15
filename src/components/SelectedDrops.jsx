import styled from "styled-components";
import ColoredCircle from "./ColoredCircle";
const SectionHolder = styled.div`
  display: flex;
  margin-top: 107px;
  position: relative;
  height: 579px;
  width: 100%;
  padding: 0px 115px 0px 115px;
  border: 1px white solid;
  text-align: center;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const NftHeader = styled.h1`
  font-size: 96px;
  font-style: bold;
  font-weight: 700;
  line-height: 80px;
  letter-spacing: -1.4%;
  background: linear-gradient(to right, #0500fa, #e01e5a);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
  display: inline-block;
`;
const ContentContainer = styled.section`
  position: absolute;
  z-index: 1;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  border: 1px solid white;
  pointer-events: none;
  padding-top: 27px;
  h2 {
    font-size: 44px;
    font-weight: 500;
    line-height: 48px;
  }
`;
const CardHolder = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  justify-content: space-between;
`;
const Card = styled.div`
  width: 24%;
  height: 100%;
  background-color: black;
  padding: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  > img {
    width: 100%;
    height: 232px;
  }
  > div {
    display: flex;
    justify-content: space-between;
  }
  h3 {
    font-size: 24px;
    font-weight: 500;
    line-height: 120%;
    letter-spacing: 0%;
  }
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
  }
  > div > section:nth-of-type(1) {
    align-items: flex-start;
  }
  button {
    width: 250px;
    height: 38px;
    border-radius: 8px;
    outline: none;
    border: 0.5px solid #ffffff;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    background: linear-gradient(to right, #0500fa, #e01e5a);
    background-size: 0% 100%;
    background-repeat: no-repeat;
    transition: background-size 0.3s ease;
  }
  button:hover {
    background-size: 100% 100%;
  }
`;
const SelectedDrops = () => {
  return (
    <SectionHolder>
      <NftHeader>NFTs</NftHeader>
      <ColoredCircle $top="103px" $right="182px" />
      <ContentContainer>
        <h2>Selected notable drops</h2>
      </ContentContainer>
      <CardHolder>
        <Card>
          <img src="/cardPic.png" alt="" />
          <div>
            <section>
              <h3>Science Jobs</h3>
              <p>From 17.59 Flow</p>
            </section>
            <section>
              <span>
                <img src="/heart.png" alt="" />
                24
              </span>
              <img src="/Group.png" alt="" />
            </section>
          </div>
          <button>Live now</button>
        </Card>
        <Card>
          <img src="/cardPic.png" alt="" />
          <div>
            <section>
              <h3>Science Jobs</h3>
              <p>
                <img src="/icons/greenShape.png" alt="" />
                From 17.59 Flow
              </p>
            </section>
            <section>
              <span>
                <img src="/heart.png" alt="" />
                24
              </span>
              <img src="/Group.png" alt="" />
            </section>
          </div>
          <button>Live now</button>
        </Card>
        <Card>
          <img src="/cardPic.png" alt="" />
          <div>
            <section>
              <h3>Science Jobs</h3>
              <p>
                <img src="/icons/greenShape.png" alt="" />
                From 17.59 Flow
              </p>
            </section>
            <section>
              <span>
                <img src="/heart.png" alt="" />
                24
              </span>
              <img src="/Group.png" alt="" />
            </section>
          </div>
          <button>Live now</button>
        </Card>
        <Card>
          <img src="/cardPic.png" alt="" />
          <div>
            <section>
              <h3>Science Jobs</h3>
              <p>
                <img src="/icons/greenShape.png" alt="" />
                From 17.59 Flow
              </p>
            </section>
            <section>
              <span>
                <img src="/heart.png" alt="" />
                24
              </span>
              <img src="/Group.png" alt="" />
            </section>
          </div>
          <button>Live now</button>
        </Card>
      </CardHolder>
    </SectionHolder>
  );
};
export default SelectedDrops;
