import { Container, Select, Title } from "./signup.styles"
import FormInput from "../form-input/form-input.component"
import { useState } from "react";
import departments from "../../assets/departments";
import CatigoreInput from "../catigore-input/catigore-input.component";
import { Button } from "../catigore-input/catigore-input.styles";
const SignupPage = () => {

    const defaultFormFields = {
        email: '',
        password: '',
        department: 'Department of General Surgery',
        fullName: '',
        catigore: '',
        catigores: []
    };
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password, department, fullName, catigore, catigores } = formFields;

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    };
    const addCatigorie = (value) => {
        if (catigores.includes(value)) {
            return;
        }
        const newCatigores = [...catigores, value];
        setFormFields({ ...formFields, catigores: newCatigores });
    }
    const removeCatigorie = (value) => {
        const filterCatigores = catigores.filter((catigore) => catigore !== value);
        setFormFields({ ...formFields, catigores: filterCatigores });
    }
    const handleSubmit = ({ catigore, ...otherProps }) => {
        const formData = { ...otherProps };
        console.log(formData)
    }
    return (
        <>
            <Title>please fill up the information below</Title>
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
                <FormInput
                    label='Full Name'
                    type='text'
                    required
                    onChange={handleChange}
                    name='fullName'
                    value={fullName}
                />

                <Select onChange={handleChange} value={department} name="department">
                    {
                        departments.map((department, idx) => <option key={idx} value={department}>{department}</option>)
                    }
                </Select>
                <CatigoreInput
                    label='Catigores'
                    type='text'
                    required
                    onChange={handleChange}
                    name='catigore'
                    value={catigore}
                    catigores={catigores}
                    onAdding={addCatigorie}
                    onDeleting={removeCatigorie}
                />


                <Button onClick={() => handleSubmit(formFields)}>
                    submit
                </Button>
            </Container>
        </>
    )
}
export default SignupPage;