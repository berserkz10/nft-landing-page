import styled from "styled-components"
const SectionHolder = styled.section`
  position: relative;
  height: 650px;
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
const CardsContainer = styled.div`
    flex: 1;
    width: 100%;
    border: #ffffff71 solid 1px;
    display: flex;
    gap: 20px;
    > div{
        width: 49%;
        position: relative;
    }
    > div:nth-of-type(1){
        position: relative;
        >img{
            width: 100%;
            height: 88%;
        }
    }
    > div:nth-of-type(2){

    }
`
const FirstCard = styled.div`
    width: 550px;
    height: 210px;
    border: #ffffff71 solid 1px;
    z-index: 1;
    position: absolute;
    bottom: 0px;
    left: 17px;
`
const ResourcesSection = () => {
    return(
        <SectionHolder>
            <NftHeader>NFTs</NftHeader>
            <ContentContainer>
                <h3>Resources for getting started</h3>
                <CardsContainer>
                    <div>
                        <img src="/giant.png" alt="" />
                        <FirstCard></FirstCard>
                    </div>
                    <div></div>
                </CardsContainer>
            </ContentContainer>
            
        </SectionHolder>
    )
}
export default ResourcesSection