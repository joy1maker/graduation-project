import styled from "styled-components"


export const Container = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    input{
        width:100%;
    }
    a{
        color:white;
        text-decoration:none;
        &:hover{
            text-decoration:underline;
        }
    }

`