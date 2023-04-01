import FormInput from "../form-input/form-input.component";
import { Button, Container } from "./catigore-input.styles"
const CatigoreInput = ({ handleChange, onDeleting, catigores, onAdding, value, ...otherProps }) => {

    return (
        <>
            <Container>
                <FormInput
                    value={value}
                    {...otherProps}
                    style={{ width: "500px" }}
                />
                <Button onClick={() => onAdding(value)}>
                    add
                </Button>

            </Container>
            {
                catigores.map((catigore, idx) => <span style={{ cursor: "pointer" }} key={idx} onClick={() => onDeleting(catigore)}>{catigore}</span>)
            }
        </>
    )
}
export default CatigoreInput;