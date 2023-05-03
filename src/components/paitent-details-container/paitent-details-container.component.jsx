import { useParams } from "react-router-dom";
import { Title, Container, InfoContainer, InfoFiled } from './paitent-details-container.styles'

const PaitentContainer = () => {
    const { patient } = useParams();
    console.log(patient);
    const details = {
        "id": 1,
        "first_name": "youssif",
        "last_name": "fayez",
        "national_id": "124214124124111",
        "eamil": "youssiffayez@gmail.com",
        "phone_number": "011481241241",
        "City": "giza",
        "Gender": true,
        "blood_type": "O +",
        "birth_day": "2002-03-14",
        "alergies": ['penclien', 'strawberries', 'fish'],
        "tobaco_intake": false,
        "illegal_drugs": ['tramadol', 'cocain'],
        "alchol_intake": 5
    }
    const { id, first_name, last_name, national_id, eamil, phone_number, City } = details;
    return (
        <Container>
            <Title>basic info : </Title>
            <InfoContainer>
                <InfoFiled>full name : {first_name} ,{last_name}</InfoFiled>
                <InfoFiled>ID : {id}</InfoFiled>
            </InfoContainer>
        </Container>
    )
}
export default PaitentContainer;