
import { useState } from 'react';
import { ReplyBody, Container, Title, Field } from './reply.styles'
import { Button } from 'react-bootstrap';
import axios from 'axios';
const ReplyComponent = ({ id }) => {

    const [body, setBody] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);
    // eslint-disable-next-line

    const changeHandler = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleSubmit = event => {
        event.preventDefault();
        const formData2 = new FormData();
        formData2.append(
            "in_file",
            selectedFile,
            selectedFile.name
        );
        axios.post("http://localhost:8000/image/reply?filename=s.jpg&user_id=2", formData2).then((data) => {
            console.log(data);
        })
    }
    const handleBodyChange = (event) => {
        const { value } = event.target;
        setBody(value);
    };
    return (
        <Container>
            <Title>Reply section</Title>
            <Field gridArea={`id`}>selected id : {id}</Field>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <input name="image" type="file" onChange={changeHandler} accept=".jpeg, .png, .jpg" />
                </fieldset>
                <Button type="submit">Save</Button>
            </form>
            <ReplyBody value={body} onChange={handleBodyChange} />
        </Container>
    )
}
export default ReplyComponent;