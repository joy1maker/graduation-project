import styled from "styled-components";

export const Container = styled.div`
    padding: 20px 10%;
`

export const Title = styled.div`
    font-size: 2rem;
    border-bottom: 2px solid white;
    padding-bottom: 4px;
    margin-bottom: 20px;
    text-transform: capitalize;
    width: fit-content;
`
export const InfoContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2,1fr);
    column-gap: 5%;
`
export const InfoFiled = styled.span`
    font-size: 1.2rem;
    font-weight: 400;
    text-transform: capitalize;
`