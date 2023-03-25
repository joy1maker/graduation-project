import styled from "styled-components";


export const Container = styled.div`
    height: 300px;
    width: 25%;
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