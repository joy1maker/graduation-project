import { NavigationContainer, LogoContainer, NavLinks, NavLink } from "./navgation.styles"
import { ReactComponent as HomeLogo } from '../../assets/icons/home-icon-silhouette-svgrepo-com.svg';
import { Outlet } from 'react-router-dom';
import { DoctorContext } from "../../contexts/doctor.context";
import { useContext } from "react";
const Navgation = () => {
    const { doctor } = useContext(DoctorContext);
    return (
        <>
            {doctor &&
                <NavigationContainer>
                    <LogoContainer to='/'>
                        <HomeLogo className='logo' />
                    </LogoContainer>
                    <NavLinks>
                        <NavLink to="/myprofile">profile</NavLink>
                        <NavLink to="/schedule">schedule</NavLink>
                        <NavLink to="/questions">questions</NavLink>
                    </NavLinks>
                </NavigationContainer>}
            <Outlet />
        </>

    )
}
export default Navgation;