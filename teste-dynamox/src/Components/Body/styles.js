/* --------------------------------- IMPORTS ---------------------------------*/
import styled from 'styled-components';

/* --------------------------------- EXPORTS ---------------------------------*/

export const BodyDiv = styled.div`
  display: flex;
  margin: 0%;
  
  align-items: center;

`;
export const Background = styled.section`
    display: flex;
    flex-direction: row;
    padding-bottom: 7.4%;
    
    position: relative;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: top center;
    color: rgb(255, 255, 255);
    -webkit-box-align: center;
    -webkit-box-pack: center;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 7.5%;
  margin-top:5%;
  width: 46%;
   
  h1 { 
    font-style: normal;
    font-weight: bold;
    font-size: 5vw;
    line-height: 6vw;
    margin-bottom: 9%;

    color: #FFFFFF;
  }

  img {
    width: 27.53%;
    height: fit-content;
    margin-left: 1%;
  }
`

export const Image = styled.img`
  width: 54%;
`;