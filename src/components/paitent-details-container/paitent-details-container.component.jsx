import { Link, useParams } from "react-router-dom";
import { Title, Container, InfoContainer, InfoFiled } from './paitent-details-container.styles'
import WordDocument from "../Word-document/Word-document.component";
import 'https://kit.fontawesome.com/64d58efce2.js';
const PaitentContainer = () => {
    // eslint-disable-next-line 
    const { patient } = useParams();
    const details = {
        "id": 6,
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
        "current_drugs": ['insulin', 'bandol', 'phasmodol'],
        "illegal_drugs": ['tramadol', 'cocain'],
        "alchol_intake": 5,
        "paitent_dcm_normal": "I16",
        "paitent_dcm_dignose": null
    }
    const { alchol_intake, id, first_name, last_name,
        national_id, eamil, phone_number, City, Gender, blood_type,
        birth_day, alergies, tobaco_intake, illegal_drugs, current_drugs,
        paitent_dcm_normal, paitent_dcm_dignose
    } = details;

    const saveProps = () => {
        localStorage.setItem("paitent_id", id);
        localStorage.setItem("file_name", paitent_dcm_normal);
    }
    return (
        <Container>
            <Title>basic info : </Title>
            <InfoContainer>
                <InfoFiled><i className='fas fa-user'></i>full name : {first_name} ,{last_name}</InfoFiled>
                <InfoFiled><i className='fas fa-user'></i>ID : {id}</InfoFiled>
                <InfoFiled><i className='fa fa-id-card'></i>national id : {national_id}</InfoFiled>
                <InfoFiled><i className='fas fa-envelope'></i>email : {eamil}</InfoFiled>
                <InfoFiled><i className='fas fa fa-phone'></i>phone_number : {phone_number}</InfoFiled>
                <InfoFiled><i className='fas fa-male'></i><i className='fas fa-female'></i>gender : {Gender ? "male" : "female"}</InfoFiled>
                <InfoFiled><i className='fas fa-city'></i>city : {City}</InfoFiled>
                <InfoFiled><i className='fas fa-calendar-alt'></i>birth date : {birth_day}</InfoFiled>
            </InfoContainer>
            <hr />
            <Title>medical info : </Title>
            <InfoContainer>
                <InfoFiled><i className='fas fa-burn'></i>blood type : {blood_type}</InfoFiled>
                <InfoFiled><i className='fas fa-allergies'></i>alergies : [ {alergies.map(((alergie, idx) => { return idx !== alergies.length - 1 ? alergie + " , " : alergie }))} ]</InfoFiled>
                <InfoFiled><i className='fas fa-smoking'></i> tobaco intake : {tobaco_intake ? "smoker" : "not a smoker"}</InfoFiled>
                <InfoFiled><i className='fas fa-pills'></i>illegal_drugs : [ {illegal_drugs.map(((alergie, idx) => { return idx !== illegal_drugs.length - 1 ? alergie + " , " : alergie }))} ]</InfoFiled>
                <InfoFiled><i className='fas fa-capsules'></i>illegal_drugs : [ {current_drugs.map(((alergie, idx) => { return idx !== current_drugs.length - 1 ? alergie + " , " : alergie }))} ]</InfoFiled>
                <InfoFiled><i className='fas fa-beer'></i>alchol consumtion : {alchol_intake} ounces/week</InfoFiled>
            </InfoContainer>
            <hr />
            <Title>dcm files</Title>
            <InfoFiled>
                {
                    paitent_dcm_normal
                        ?
                        <div>
                            to see the orginal paitent file click <Link to={'/viewer'} state={{ test: 'test' }} onClick={saveProps} target="_blank">here</Link>
                        </div>
                        :
                        <div>
                            there is no dcm file for this paitent
                        </div>
                }
            </InfoFiled>
            <InfoFiled>
                {
                    paitent_dcm_dignose
                        ?
                        <div>
                            to see the dignosed paitent file click <Link to={'/viewer'} state={{ test: 'test' }} onClick={saveProps} target="_blank">here</Link>
                        </div>
                        :
                        <div>
                            there is no dcm dignoses file for this paitent
                        </div>
                }
            </InfoFiled>
            <hr />
            <br />
            <br />
            <br />
            <Title>doctor report</Title>
            <WordDocument />
        </Container>
    )
}
export default PaitentContainer;