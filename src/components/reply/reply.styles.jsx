import styled, { css } from 'styled-components'

export const TextWithUnderline = styled.span`
  text-decoration: underline;
  ${({ underlineOffset }) =>
        css`
      position: relative;
      &:after {
        content: '';
        position: absolute;
        left: 0;
        bottom: -2px;
        width: 100%;
        height: 1px;
        background-color: black; /* Adjust the color of the underline as needed */
      }
    `}
`;
export const Container = styled.div`
display: flex;
margin-bottom: 90px;
padding-left: 5%;
gap:25%;
`

export const ReplyBody = styled.textarea`
background-color: #2c363f;
min-height: 500px;
width: 500px;
&:focus{
    outline: unset;
}
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
    grid-area: head;
    margin: 20px 0;
`

export const PaitentDataContainer = styled.div`
    width: 300px;
    height: fit-content;
    min-height: 300px;
    background: #fff;
    grid-area:data;
    margin-top: 100px;
    border: 10px solid brown;
    display:flex;
    flex-direction: column;
    padding: 15px;
    color:black;
    gap: 20px;
    align-items: center;
    justify-content: center;
    span{
        text-decoration: unset;
    }
`
export const ColContainer = styled.div`
    display:flex;
    flex-direction:column;
    gap: 50px;
 `
