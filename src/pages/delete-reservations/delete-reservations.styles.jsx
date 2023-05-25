import styled from 'styled-components'


export const Container = styled.div`
    margin-left: 5%;
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-template-rows: 30px 500px auto;
    grid-template-areas:"stime . etime" "table table table" ". button ."  ;
    row-gap: 10%;
`
export const TimeField = styled.div`
display :flex;
gap:20px;
* *{
    fill :white;
}
`