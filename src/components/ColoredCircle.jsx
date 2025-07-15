import styled from "styled-components"
const ColoredCircle = styled.div`
  border-radius: 50%;
  position: absolute;
  width: 450px;
  height: 392px;
  background-color: #d71d6199;
  filter: blur(200px);
  z-index: -1;
  top: ${({ $top }) => $top || "auto"};
  left: ${({ $left }) => $left || "auto"};
  right: ${({ $right }) => $right || "auto"};
  bottom: ${({ $bottom }) => $bottom || "auto"};
`;
export default ColoredCircle