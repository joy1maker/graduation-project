
import { useContext, useState } from 'react';
import { ReplyBody, Container, Title, PaitentDataContainer, ColContainer, TextWithUnderline } from './reply.styles'
import { Button } from 'react-bootstrap';

import { PaitentsContext } from '../../contexts/paitent.context';
import { replyEmail } from '../../assets/email';
import { DoctorContext } from '../../contexts/doctor.context';

export const calculateAge = (birthDate) => {
    const currentDate = new Date();
    const birthDateParts = birthDate.split('T')[0].split('-');
    const birthYear = parseInt(birthDateParts[0]);
    const birthMonth = parseInt(birthDateParts[1]);
    const birthDay = parseInt(birthDateParts[2]);

    let age = currentDate.getFullYear() - birthYear;

    // Check if the current month is before the birth month
    if (currentDate.getMonth() < birthMonth) {
        age--;
    }
    // Check if the current month is the same as the birth month,
    // but the current day is before the birth day
    else if (
        currentDate.getMonth() === birthMonth &&
        currentDate.getDate() < birthDay
    ) {
        age--;
    }

    return age;
}

const ReplyComponent = ({ question }) => {

    const [body, setBody] = useState('');
    const [title, setTitle] = useState('');
    const { paitents } = useContext(PaitentsContext);
    const { doctorData } = useContext(DoctorContext);
    // eslint-disable-next-line
    if (!question || !paitents) {
        return <></>;
    }
    const paitentData = paitents.find((paitent) => paitent.id === question.patient_id);
    const { first_name, last_name, birth_date, gender, phone_number } = paitentData;

    const sendReply = () => {
        replyEmail(paitentData, doctorData, title, body, question.title)
    }
    const handleBodyChange = (event) => {
        const { value, name } = event.target;
        if (name === 'body') {
            setBody(value);
        }
        else {
            setTitle(value);
        }
    };
    return (

        <Container>
            <PaitentDataContainer>
                <TextWithUnderline >name : {first_name} , {last_name}</TextWithUnderline>
                <TextWithUnderline >age : {calculateAge(birth_date)}</TextWithUnderline>
                <TextWithUnderline >gender : {gender === 1 ? "Male" : "Female"}</TextWithUnderline>
                <TextWithUnderline >phone number: {phone_number}</TextWithUnderline>
            </PaitentDataContainer>
            <ColContainer>
                <Title>Reply section</Title>
                <ReplyBody value={title} name='title' onChange={handleBodyChange} style={{ minHeight: "50px" }} placeholder='reply title' />
                <ReplyBody value={body} name='body' onChange={handleBodyChange} placeholder='reply body' />
                <Button onClick={sendReply}>reply to this question</Button>
            </ColContainer>
        </Container>
    )
}
export default ReplyComponent;