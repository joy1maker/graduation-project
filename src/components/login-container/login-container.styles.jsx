import styled from "styled-components"


export const Container = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    margin-top: 10%;
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