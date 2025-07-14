/* eslint-disable no-unused-vars */
import { useState } from "react";
import styled from "styled-components";
const SectionContainer = styled.section`
  width: 100%;
  height: 826px;
  display: flex;
  padding: 0px 115px 0px 115px;
`;
const ColoredCircle = styled.div`
  border-radius: 50%;
  position: absolute;
  width: 450px;
  height: 392px;
  background-color: #d71d6199;
  filter: blur(200px);
  z-index: -1;
`;
const SliderContainer = styled.div`
  width: 100%;
  height: 674px;
  border: 1px solid white;
`;
const HeroSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  height: 100%;
  border: 1px solid purple;
  padding-top: 131px;
`;
const TextContainer = styled.section`
  width: 100%;
  height: fit-content;

  h1 {
    font-size: 64px;
    font-weight: 700;
    font-style: bold;
    line-height: 80px;
    letter-spacing: -1.4%;
  }
  span {
    color: #85129c;
  }
  p {
    font-size: 24px;
    font-weight: 300;
    font-style: light;
    letter-spacing: 0%;
    line-height: 156%;
    max-width: 572px;
    margin-bottom: 43px;
  }
`;
const BtnsContainer = styled.div`
  width: 245px;
  height: 44px;
  display: flex;
  justify-content: space-between;

  font-size: 16px;
  font-weight: 300;
  font-style: Medium;
  letter-spacing: 0%;
  line-height: 20px;
  border: none;
  outline: none;
  margin-bottom: 43px;

  button {
    border-radius: 8px;
    height: 100%;
  }
`;
const ExploreBtn = styled.button`
  width: 119px;
  background: linear-gradient(to right, #0500fa, #e01e5a);

  border: none;
  outline: none;
`;
const CreateBtn = styled.button`
  width: 114px;
  background-color: #1e1b33;

  border: #e7e7e766 1px solid;
`;
const LearnMoreContainer = styled.div`
  width: 215px;
  height: fit-content;
  align-items: center;
  gap: 8px;
  display: flex;
  img {
    width: 32px;
    height: 32px;
  }
  p {
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0%;
  }
`;
const ImageHolder = styled.div`
  border-radius: 50%;
  border: 1px #7040f2 solid;
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
  position: absolute;
  top: ${({ $top }) => $top};
  left: ${({ $left }) => $left};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
`;
const DashedSVG = styled.svg`
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
`;
const DashedCircle = () => (
  <DashedSVG viewBox="0 0 210 210">
    <circle
      cx="105"
      cy="105"
      r="100"
      fill="none"
      stroke="#7040F2"
      strokeWidth="2"
      strokeDasharray="8 4" // dash length = 8px, gap = 4px
    />
  </DashedSVG>
);
const DotsContainer = styled.div`
  height: 8px;
  width: 83px;
  position: absolute;
  top: 741px;
  left: 726px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;

  button {
    width: 16px;
    height: 8px;
    border-radius: 100px;
    background-color: #d9d9d9;
    outline: none;
    border: none;
  }
  .activeBtn {
    width: 41px;
    background: linear-gradient(to right, #0500fa, #e01e5a);
  }
`;
const MainSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const nextSlide = () => {
    setCurrentSlide((prev) => prev + 1);
  };
  return (
    <SectionContainer>
      <ColoredCircle />
      <SliderContainer>
        <HeroSection>
          <TextContainer>
            <h1>
              Discover, collect, and sell extraordinary <span>NFTs</span>
            </h1>
            <p>
              Our marketplace is the world’s first and largest NFT market for
              independent creators worldwide{" "}
            </p>
          </TextContainer>
          <BtnsContainer>
            <ExploreBtn>Explore</ExploreBtn>
            <CreateBtn>Create</CreateBtn>
          </BtnsContainer>
          <LearnMoreContainer>
            <img src="/icons/learnmore.png"></img>
            <p>Learn more about Nftico</p>
          </LearnMoreContainer>
          <ImageHolder
            $width="86px"
            $height="86px"
            $top="464.84px"
            $left="602px"
          >
            <DashedCircle $width="74.5px" $height="74.5px"></DashedCircle>
          </ImageHolder>
          <ImageHolder
            $width="156px"
            $height="156px"
            $top="364.53px"
            $left="694.99px"
          >
            <DashedCircle $width="136px" $height="136px"></DashedCircle>
          </ImageHolder>
          <DotsContainer>
            <button className="activeBtn"></button>
            <button></button>
            <button></button>
          </DotsContainer>
        </HeroSection>
      </SliderContainer>
    </SectionContainer>
  );
};
export default MainSection;
