import styled from "styled-components"
const SectionHolder = styled.div`
    height: 78px;
    width: 100%;
    overflow: hidden;
    padding: 0px 115px;
    img{
        width: 100%;
    }
`
const BrandsNames = () => {
return(
    <SectionHolder>
        <img src="/BrandsName.png" alt="brands" />
    </SectionHolder>
)
}
export default BrandsNames