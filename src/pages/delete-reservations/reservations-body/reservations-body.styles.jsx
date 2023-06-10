import styled from "styled-components";

export const ReservationsContainer = styled.div`
   display: flex;
   flex-direction: column;
   width: 90%;
   grid-area: table;

`
export const TableContainer = styled.div`
    min-height: 100%;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px auto 0;
   width: 100%;
    
`
export const ContainerHeader = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`
export const HeaderBlock = styled.div`
  text-transform: capitalize;
  width: 50%; 
`
export const Total = styled.div`
  margin-top: 30px;
  font-size: 30px;
`

