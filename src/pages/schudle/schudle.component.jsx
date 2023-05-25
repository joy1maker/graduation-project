import { useContext } from "react";
import PatientsContainer from "../../components/patients-container/patients-container.component";
import { ReservationContext } from "../../contexts/reservations.context";
import { motion } from "framer-motion";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ErrorPage from "../error-page/error-page.component";

const SchedulePage = () => {
    const { isReservationsError, isReservationsLoading } = useContext(ReservationContext)
    const nav = useNavigate();
    const onNavigateHandler = (id) => {
        nav(`../delete-reservation`)
    }

    if (isReservationsError) {
        return (
            <ErrorPage />
        )
    }


    return (
        <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} exit={{ x: window.innerWidth }} >
            <Button variant="danger" style={{ marginLeft: "50%", transform: "translateX(-50%)", marginBottom: "50px" }} onClick={onNavigateHandler}>delete reservations</Button>
            <PatientsContainer />
        </motion.div>
    )
}
export default SchedulePage;
