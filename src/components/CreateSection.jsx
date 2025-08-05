import styled from "styled-components";
import ColoredCircle from "./ColoredCircle";
const SectionHolder = styled.div`
  width: 100%;
  height: 486px;
  padding: 0px 115px;
  display: flex;
`;
const ImageContainer = styled.div`
  width: 40%;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
  }
`;
const TextContainer = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  button{
    width: 149px;
    height: 44px;
  }
  h3{
    font-size: 44px;
    font-weight: 500;
  }
  p{
    font-size: 18px;
    font-weight: 300;
    line-height: 32px;
    color: #C0C0C0;
  }
`;
const CreateSection = () => {
  return (
    <SectionHolder >
      <ImageContainer>
        <ColoredCircle />
        <img src="./ethereumPic.png" alt="" />
      </ImageContainer>
      <TextContainer>
        <h3>Create, Sell well & Collect Your Best Very Fast NFTs.</h3>
        <p>
          Create, Sell well & Collect Your Best Very Fast NFTs.The purpose of
          lorem ipsum is to create a natural looking block of text (sentence,
          paragraph, page, etc.) that doesn't distract from the layout. A
          practice not without controversy, laying out pages with meaningless
        </p>
        <button className="cardsBtns">Connect Wallet</button>
      </TextContainer>
    </SectionHolder>
  );
};
export default CreateSection;
