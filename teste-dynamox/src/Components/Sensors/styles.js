/* --------------------------------- IMPORTS ---------------------------------*/
import styled from 'styled-components';

/* --------------------------------- EXPORTS ---------------------------------*/

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
 
  h1 {
    margin: 95px 100px 0 100px;
    font-style: normal;
    font-weight: bold;
    font-size: 40px;
    line-height: 47px;
    text-align: center;

    color: #37383D;
  }

  p {
    padding: 0 100px;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    display: flex;
    align-items: center;
    text-align: center;

    color: #454545;

    @media (max-width: 1200px){
      flex-direction: column;
      padding: 0 50px;
    }
  }

  button{
    margin-top: 27px;
    width: 183px;
    height: 39px;

    background: #263252;
    border-radius: 5px;
    border: #263252;
    margin-left: auto;
    margin-right: auto;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 23px;

    color: #FFFFFF;
  }
`;

export const Row = styled.div`
  
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (max-width: 1200px){
    flex-direction: column;
  }
`

export const Img = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 33px;

  img {
    width: 276.83px;
    
  }

  p {
    font-style: normal;
    font-weight: bold;
    font-size: 40px;
    line-height: 47px;

    color: #5D7A8C;

    @media (max-width: 1200px){
      margin:10px;
    }
  }

`