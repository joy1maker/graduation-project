import { Container } from "./patients-container.styles"
import { useContext } from "react";
import { PatientsContext } from "../../contexts/patient.context";
import PaitentFiled from "../field-container/field-container.component";
const PatientsContainer = () => {
    const { currentPatients } = useContext(PatientsContext)
    // console.log(currentPatients);
    const backgroundColor = ["#000000", "#2c363f"];
    return (
        <>
            <Container>
                {
                    currentPatients.map((paitent, idx) => <PaitentFiled backgroundColor={backgroundColor[idx % 2]} patient={paitent} key={paitent.id} />)
                }
            </Container>
        </>
    )
}
export default PatientsContainer;