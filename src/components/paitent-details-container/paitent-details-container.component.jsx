import { Link, useParams } from "react-router-dom";
import { Title, Container, InfoContainer, InfoFiled } from './paitent-details-container.styles'
import WordDocument from "../Word-document/Word-document.component";
import 'https://kit.fontawesome.com/64d58efce2.js';
import axios from "axios";
import { useQuery } from "react-query";
import { useEffect, useState } from "react";
import URLS from '../../assets/URLS';
const parseJSONProperties = (obj) => {
    for (let key in obj) {
        if (typeof obj[key] === 'string') {
            try {
                obj[key] = JSON.parse(obj[key]);
            } catch (error) {
                // Ignore the error if the string cannot be parsed as JSON
            }
        }
    }
    return obj;
};
export const fetchPaitentData = async (id) => {
    const res = await axios.get(`http://localhost:8000/api/patients-emr/${id}`);
    return parseJSONProperties(res.data);
}
const PaitentContainer = () => {
    const { patient } = useParams();
    // eslint-disable-next-line 
    const { isLoading: isPaitentLoading, isError: isPaitentError, data } = useQuery('paitent-details', () => fetchPaitentData(patient), { staleTime: 60000, retry: false });
    const { fast } = URLS;
    const paitent = data;
    const [pneumoniaPredections, setPneumoniaPredction] = useState(null);
    useEffect(() => {
        if (!paitent) return;
        if (paitent.patient_dcm_normal) {
            axios.get(`${fast}/ML?paitent_id=${patient}&filename=${paitent.patient_dcm_normal}`).then(res => {
                const { data } = res;
                setPneumoniaPredction(data);
            })
        }
    }, [paitent, fast]);
    if (isPaitentLoading) {
        return <div>loading ...</div>
    }
    const { alchol_intake, id, first_name, last_name,
        national_id, email, phone_number, city, Gender, blood_type,
        birth_date, alergies, tobaco_intake, illegal_drugs, current_drugs,
        patient_dcm_normal: paitent_dcm_normal, patient_dcm_diagnose: paitent_dcm_dignose, patient_id
    } = paitent;

    const saveProps = () => {
        localStorage.setItem("paitent_id", patient_id);
        localStorage.setItem("file_name", paitent_dcm_normal);
    }
    return (
        <Container>
            <Title>basic info : </Title>
            <InfoContainer>
                <InfoFiled><i className='fas fa-user'></i>full name : {first_name} ,{last_name}</InfoFiled>
                <InfoFiled><i className='fas fa-user'></i>ID : {id}</InfoFiled>
                <InfoFiled><i className='fa fa-id-card'></i>national id : {national_id}</InfoFiled>
                <InfoFiled><i className='fas fa-envelope'></i>email : {email}</InfoFiled>
                <InfoFiled><i className='fas fa fa-phone'></i>phone_number : {phone_number}</InfoFiled>
                <InfoFiled><i className='fas fa-male'></i><i className='fas fa-female'></i>gender : {Gender ? "male" : "female"}</InfoFiled>
                <InfoFiled><i className='fas fa-city'></i>city : {city}</InfoFiled>
                <InfoFiled><i className='fas fa-calendar-alt'></i>birth date : {birth_date}</InfoFiled>
            </InfoContainer>
            <hr />
            <Title>medical info : </Title>
            <InfoContainer>
                <InfoFiled><i className='fas fa-burn'></i>blood type : {blood_type}</InfoFiled>
                <InfoFiled><i className='fas fa-allergies'></i>alergies : {alergies}</InfoFiled>
                <InfoFiled><i className='fas fa-smoking'></i> tobaco intake : {tobaco_intake ? "smoker" : "not a smoker"}</InfoFiled>
                <InfoFiled><i className='fas fa-pills'></i>illegal_drugs :  {illegal_drugs}</InfoFiled>
                <InfoFiled><i className='fas fa-capsules'></i>illegal_drugs :  {current_drugs}</InfoFiled>
                <InfoFiled><i className='fas fa-beer'></i>alchol consumtion : {alchol_intake} ounces/week</InfoFiled>
            </InfoContainer>
            <hr />
            <Title>Machine learning models </Title>
            <InfoContainer>
                <InfoFiled ><i className='fas fa-brain'></i> Pneumonia ML model: the predection is {pneumoniaPredections ? `the result is ${pneumoniaPredections.classname}  with confirmation ratio of ${pneumoniaPredections.result}` : "loading..."}</InfoFiled>
            </InfoContainer>
            <hr />
            <Title>dcm files</Title>

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

            <hr />
            <br />
            <br />
            <br />
            <Title>doctor report</Title>
            <WordDocument paitent={paitent} />
        </Container>
    )
}
export default PaitentContainer;