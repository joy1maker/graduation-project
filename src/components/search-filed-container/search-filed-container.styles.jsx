import styled from "styled-components";

export const Container = styled.div`
     width: 100%;
    display: flex;
    justify-content: space-around;
    background-color: #151a1f;
    padding: 20px 0;
    align-items: flex-start;
    margin-bottom: 20px;
`
export const FilterContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
`
export const FilterLabel = styled.label`
    &:hover{
        color:#ddd;
        cursor: pointer;
    }
`
export const FilterInput = styled.input`
    background-color: #2c363f;
    border-radius: 5px;
`