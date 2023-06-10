import { useContext, useState } from "react";
import FormInput from "../form-input/form-input.component"
import { Container } from './login-container.styles'
import { Link } from "react-router-dom";
import { DoctorContext } from "../../contexts/doctor.context";
import { Button } from 'react-bootstrap';


const LoginPage = () => {
    const { doctorLogin } = useContext(DoctorContext)
    const defaultFormFields = {
        email: '',
        password: '',
    };
    const [message, setMessage] = useState('')
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    };
    const onLoginClickHandler = async () => {
        const result = await doctorLogin(email, password);
        const { data } = result;
        switch (result.status) {
            case "401":
                setMessage("invalid email or password")
                break;
            case "400":
                setMessage("there is a problem with the server try again later");
                break;
            case "200":
                localStorage.setItem("doctor", JSON.stringify(data));
        }
    }
    return (
        <Container>
            <FormInput
                label='Email'
                type='email'
                required
                onChange={handleChange}
                name='email'
                value={email}
            />
            <FormInput
                label='Passowrd'
                type='password'
                required
                onChange={handleChange}
                name='password'
                value={password}
            />
            <Button variant="primary" onClick={onLoginClickHandler} style={{ width: "25%" }}>login</Button>
            {message !== '' && <span style={{ color: "red" }}>{message}</span>}
            {/* <div>
                Don't have account ?  Signup <Link to="/signup">here</Link>
            </div> */}
        </Container >
    )
}
export default LoginPage;