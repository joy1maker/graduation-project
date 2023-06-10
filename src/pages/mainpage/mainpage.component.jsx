import { useContext } from "react";
import MenuContainer from "../../components/main-menu-container/menu-container.component";
import Authentcation from "../authentcation/auth.component";
import { DoctorContext } from "../../contexts/doctor.context";

const HomePage = () => {
    const { doctor } = useContext(DoctorContext)

    return (
        <>
            {
                doctor
                    ?

                    <MenuContainer />
                    :
                    <Authentcation />
            }
        </>
    )
}
export default HomePage;