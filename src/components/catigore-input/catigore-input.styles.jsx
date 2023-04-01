import styled from 'styled-components';


export const Container = styled.div`
    display:flex;
    justfiy
    width:100%;
`

export const Button = styled.div`
    color: #fff;
    background-color: #6c757d;
    border-color: #6c757d;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    user-select: none;
    border: 1px solid transparent;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: .25rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    height:20px;
    margin-top:50px;
    text-transform:capitalize;
    &:hover{
        background-color: #565e65;
        box-shadow: 0px 0px 5px 1px rgba(119,159,194,1);

    }
`