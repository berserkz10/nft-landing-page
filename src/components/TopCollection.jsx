import styled from "styled-components";
import fetchingData from "./FetchingData";

const SectionContainer = styled.div`
  width: 100%;
  height: 600px;
  border: white solid 1px;
`;

const TopCollections = () => {
    fetchingData('eth','7d')
  return <SectionContainer>


  </SectionContainer>;
};
export default TopCollections;
