import styled from 'styled-components';

export const Table = styled.table`
    font-family: Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 100%;
    td,th{
        padding: 8px;
    }
    tr:nth-child(even){
        background-color: #2c363f;
    }
    tr:hover{
        background-color: #ddd; cursor: pointer;
    }
    th{
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: center;
    color: white;
    }
    span{
    font-size: 20px;
  }
`