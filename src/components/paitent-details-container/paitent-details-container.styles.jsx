import styled from "styled-components";

export const Container = styled.div`
    padding: 20px 10%;
    background-color: black;
    a{
        color: white;
        &:hover{
            color: #1843d1;
            text-decoration: underline;
            cursor: pointer;
        }
    }
    i{
    color:#afb5bb;
    margin: 0 10px;   
    }
`

export const Title = styled.div`
 font-size: 2rem;
    border-bottom: 2px solid #A9A9A9;
    padding-bottom: 4px;
    margin-bottom: 20px;
    text-transform: capitalize;
    width: fit-content;
    margin-left: 40%;
    font-weight: bold;
    font-family: 'Times New Roman', Times, serif;
    margin-top: 10px;
`
export const InfoContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 5%;
    row-gap: 20px;
    border: 1px solid #A9A9A9;
    border-radius: 10px;
    padding: 20px;
    &:hover{
    background-color: #A9A9A9;
    cursor: pointer;
    }
    row-gap: 20px;
`
export const InfoFiled = styled.span`
    font-size: 1.2rem;
    font-weight: 400;
    text-transform: capitalize;
    background-color: #818589;
    padding: 10px;
    border: 1px solid #A9A9A9;
    border-radius: 10px;
    &:first-of-type(div){
        display: inline-block;
        font-weight: normal;
        color: black;
        font-family: 'Times New Roman', Times, serif;
    }
`

export const PatientFile = styled.div`
    margin-top: 40px;
    color:#818589;
    margin-left: 35%;
    font-weight: bold;
    font-family: 'Times New Roman', Times, serif;
`