import styled from 'styled-components'

export const ProfileContainer = styled.div`
display: grid;
grid-template-columns: 35% 55%;
column-gap: 10%;
padding: 50px;
@media screen and (max-width:700px) {
    flex-direction:column;
    justify-content: center;
    align-items: center;
}
`

export const ImageContainer = styled.div`
    img{
        width: 80%;
        border-radius: 50%;
    }
    `
export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    word-wrap: break-word;
    background-color: rgb(62 61 61);
    background-clip: border-box;
    border: 0 solid rgba(0,0,0,.125);
    border-radius: 1rem;
    hr{
        width: 80%;
        align-self: center;
    }
    button{
            margin-left: 60px;
            margin-bottom: 20px;
            width: 20%;
    }
`
export const Name = styled.div`
    font-size: 30px;
    color:white;
    text-transform: capitalize ;
    margin-left: 50%;
    transform: translateX(-50%);
    margin-top: 30px;
    @media screen and (max-width:700px) {
        margin-left: unset;
        transform: unset;
    }
    font-family: 'Roboto', sans-serif;
    font-style: italic;
`
export const Label = styled.div`
    width :25%;
    color :#FFF;
    text-transform: capitalize;
`
export const Content = styled.div`
    width: 75%;
    color :rgb(164 165 159);
`
export const Field = styled.div`
    display: flex;
    margin: 20px;
    margin-bottom: 15px;
    padding: 10px;
`
export const Input = styled.input`
    background-color: #0f1215;
    border-radius: 5px;
    width: 75%;
    color:white;
`