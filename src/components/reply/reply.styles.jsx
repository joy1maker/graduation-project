import styled from 'styled-components'

export const Container = styled.div`
display: grid;
grid-template-columns: repeat(3,1fr);
grid-template-rows: 100px 200px auto;
grid-template-areas:". title ." "id body body" "attatchment body body"  ;
margin-bottom: 90px;
padding-left: 10%;
`
export const ReplyBody = styled.textarea`
background-color: #2c363f;
min-height: 500px;
width: 50%;
&:focus{
    outline: unset;
}
grid-area:body;
color: white;
font-size: 1.5rem;
`
export const FieldID = styled.div`
    grid-area:  id;
    color:red;
`
export const Field = styled.div`
    grid-area:  id;
    color:red;
`
export const Title = styled.div`
    font-size: 2rem;
    font-weight: 500;
    text-align: center;
    grid-area: title;
    margin: 20px 0;
`