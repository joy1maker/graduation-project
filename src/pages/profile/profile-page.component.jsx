import { useContext, useState } from 'react';
import { DoctorContext } from '../../contexts/doctor.context';
import {
    ImageContainer, ProfileContainer, Name, InfoContainer,
    Content, Field, Label, Input
} from './profile-page.styles'
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';


const ProfilePage = () => {
    const { currentDoctor } = useContext(DoctorContext);
    const ListItemStyle = { backgroundColor: "rgb(73 71 71)", color: "white", cursor: "pointer" };
    const [editInfo, setEditInfo] = useState(currentDoctor)
    const [isEditing, setIsEditing] = useState(false);
    const { email, first_name, last_name, catigores, department_name, image_name } = editInfo;
    const [catigore, setCatigore] = useState("");
    const handelCatigoreChange = (event) => {
        setCatigore(event.target.value);
    }
    // eslint-disable-next-line
    const handleChange = (event) => {
        const { name, value } = event.target;
        setEditInfo({ ...editInfo, [name]: value });
    };
    // eslint-disable-next-line
    const addCatigorie = (e) => {
        if (e.key !== 'Enter') {
            return
        }
        if (catigores.includes(catigore)) {
            return;
        }
        const newCatigores = [...catigores, catigore];
        setEditInfo({ ...editInfo, catigores: newCatigores });
        setCatigore("");
    }
    // eslint-disable-next-line
    const removeCatigorie = (value) => {
        const filterCatigores = catigores.filter((catigore) => catigore !== value);
        setEditInfo({ ...editInfo, catigores: filterCatigores });
    }
    const handelClick = () => {
        setIsEditing(!isEditing);
    }
    const getProfilePic = () => {
        try {

            return require(`../../assets/images/${image_name}`);
        }
        catch {
            return require(`../../assets/images/defaiultjpg.jpg`)
        }
    }

    const catigoreClick = isEditing ? removeCatigorie : () => null;


    return (
        <ProfileContainer>
            <ImageContainer>
                <img src={getProfilePic()} alt="profile" />
                <Name>dr.{first_name}</Name>
            </ImageContainer>
            <InfoContainer>
                <Field>
                    <Label>full name</Label>
                    <Content>{first_name} {last_name}</Content>
                </Field>
                <hr />
                <Field>
                    <Label>email address</Label>
                    {
                        isEditing
                            ?
                            <Input onChange={handleChange} name='email' value={email} />
                            :
                            <Content>{email}</Content>
                    }
                </Field>
                <hr />
                <Field>
                    <Label>department</Label>
                    <Content>{department_name}</Content>
                </Field>
                <hr />
                <Field style={{ flexDirection: "column" }}>
                    <Label>catigores </Label>
                    {isEditing && <Input onChange={handelCatigoreChange} onKeyDown={addCatigorie} value={catigore} />}
                    <Content style={{ margin: "20px" }}>
                        <ListGroup >
                            {
                                catigores.map((catigore, idx) =>
                                    <ListGroup.Item key={idx} style={ListItemStyle} onClick={() => catigoreClick(catigore)}>{catigore}</ListGroup.Item>
                                )
                            }

                        </ListGroup>
                    </Content>
                </Field>
                <Button variant="outline-light" onClick={handelClick}>{isEditing ? "save changes" : "Edit info"}</Button>
            </InfoContainer>
        </ProfileContainer>

    )
}
export default ProfilePage;