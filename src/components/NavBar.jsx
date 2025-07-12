import styled from "styled-components"
const NavbarHolder = styled.nav`
    width: 100%;
    height: 84px;
    border: 1px white solid;
    background-color: #09090A;
`
const LogoHolder = styled.div`
    display: flex;
    flex-direction: row;
`
const Logo = styled.div`
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background-color: linear-gradient(#0500FA,#E01E5A);
`

const NavBar = () => {
    return(
        <NavbarHolder>
            <LogoHolder>
                <Logo/>
            </LogoHolder>
        </NavbarHolder>
    )
}
export default NavBar