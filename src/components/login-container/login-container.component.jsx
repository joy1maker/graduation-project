import { useState } from "react";
import FormInput from "../form-input/form-input.component"
import { Container } from './login-container.styles'
import { Link } from "react-router-dom";

const LoginPage = () => {
    const defaultFormFields = {
        email: '',
        password: '',
    };
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    };
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
            <div>
                Don't have account ?  Signup <Link to="/signup">here</Link>
            </div>
        </Container>
    )
}
export default LoginPage;