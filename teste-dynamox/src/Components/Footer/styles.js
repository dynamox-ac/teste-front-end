/* --------------------------------- IMPORTS ---------------------------------*/
import styled from 'styled-components';

/* --------------------------------- EXPORTS ---------------------------------*/


export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #263252;
  padding: 40px;
  
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
    
  p {
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 35px;
    text-align: center;

    color: #FFFFFF;
    
    margin: 0 0 30px;

    :first-child{
      margin-bottom: 0;
    }
  }

  input {
    max-width: 426px;
    width: 90%;
    height: 41px;
    margin-bottom: 11px;

    background: #F4F7FC;
    border-radius: 5px;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;

    text-align: center;

    color: #454545;
  }

  button{
    margin-top: 27px;
    margin-bottom: 40px;
    width: 183px;
    height: 39px;

    background: #0165DB;
    border-radius: 5px;
    border-color: #0165DB;
    border: none;
    margin-left: auto;
    margin-right: auto;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 23px;

    color: #FFFFFF;

    :hover{
      background: #0165ff;
      cursor: pointer;
    }
  }



`;
