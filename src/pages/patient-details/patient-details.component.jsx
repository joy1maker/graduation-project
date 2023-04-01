import { Route, Routes } from "react-router-dom";
import PaitentContainer from "../../components/paitent-details-container/paitent-details-container.component";



const PatientDetails = () => {

    return (
        <Routes>
            <Route path=":patient" element={<PaitentContainer />} />
        </Routes>
    )
}
export default PatientDetails; 