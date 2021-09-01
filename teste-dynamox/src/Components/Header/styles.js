/* --------------------------------- IMPORTS ---------------------------------*/
import styled from 'styled-components';

/* --------------------------------- EXPORTS ---------------------------------*/

export const HeaderDiv = styled.header`
  display: flex;
  height: 120px;
  align-items: center;
  justify-content: space-between;

  background: #263252;

  @media (max-width:650px){
    flex-direction: column;
    justify-content: space-evenly;
    height: 140px;
  }
`;
export const Logo = styled.img`
  
  margin-left: 77px;
  width: 172.86px;
  height: 65.15px;

  @media (max-width: 650px){
    margin: 0;
  }
`;

export const Row = styled.div`
  display: flex;
  margin-top: 35px;
`

export const Link = styled.a`
  position: relative;
  flex-direction: column;
  margin: auto 37px 0 0;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 23px;
  letter-spacing: 0em;
  text-align: left;
  color: #FFFFFF;
  text-decoration: none;
  
  :hover {
    text-decoration: underline;
  }
`;