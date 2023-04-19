import styled, { keyframes } from "styled-components";


const fade = keyframes`
    0% { opacity: 0; margin-left:-200px}
  100% { opacity: 1; margin-left:0}
`
export const MainContainer = styled.div`
    display: flex;
    gap:30px;
    animation: ${fade} 1s ease-in-out ;
`
export const Container = styled.div`
    height: 300px;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 3px solid #0f1215;
    font-size: 30px; 
    font-family: 'Open Sans', sans-serif;
    &:hover{
   cursor: pointer;
  }
    @media screen and (max-width:700px) {
        width: 90%;
    }
    
`
export const ImageContainer = styled.div`
    img{
        width: 100px;
    }
`
export const DescrptionBox = styled.div`
    height: 300px;
    width: 50%;
    background-color: #171c21;
    text-align: center;
    padding: 90px;
    font-size: 28px;
`
