import { useParams } from "react-router-dom";

const PaitentContainer = () => {
    const { patient } = useParams();
    console.log(patient);
    return (
        <div>
            this is the patient : {patient}
        </div>
    )
}
export default PaitentContainer;