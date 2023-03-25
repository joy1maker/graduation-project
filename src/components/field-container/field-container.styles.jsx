import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    background-color:  ${({ backgroundColor }) => `${backgroundColor}`};
    display:flex;
`
export const Filed = styled.div`
    width: 20%;
    padding: 10px 0;
    &:first-child{
        width: 40%;
    }
`