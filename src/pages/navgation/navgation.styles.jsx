import styled from "styled-components";
import { Link } from "react-router-dom";


export const NavigationContainer = styled.div`
  height: 70px;
  width: 90%;
  margin-top: 20px;
  margin-left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  background-color: rgba(145, 185, 205);
  box-shadow: 0.5px 0.5px 15px 3px #5e7585 ;
  border-radius: 0 20px;
  @media screen and (max-width:800px) {
    height: 60px;
    padding: 10px;
    margin-bottom: 20px;
    width: 80%;
  }

`;
export const LogoContainer = styled(Link)`
height: 100%;
width: 70px;
padding: 5px;
@media screen and (max-width:800px) {
    padding: 0;
    width: 50px;
  }
`

export const NavLinks = styled.div`
width: 50%;
height: 100%;
display: flex;
align-items: center;
justify-content: flex-end;
@media screen and (max-width:800px) {
  width  :80% ;
}
`

export const NavLink = styled(Link)`
padding: 10px 15px;
cursor: pointer;
text-transform: uppercase;
`