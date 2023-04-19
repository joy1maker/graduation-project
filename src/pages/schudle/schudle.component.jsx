import { useContext } from "react";
import PatientsContainer from "../../components/patients-container/patients-container.component";
import { ReservationContext } from "../../contexts/reservations.context";
import { motion } from "framer-motion";
const SchedulePage = () => {
    const { isReservationsError } = useContext(ReservationContext)
    console.log(isReservationsError);
    if (isReservationsError) {
        return (
            <div>
                error occured
            </div>
        )
    }
    return (
        <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} exit={{ x: window.innerWidth }} >

            <PatientsContainer />
        </motion.div>
    )
}
export default SchedulePage;