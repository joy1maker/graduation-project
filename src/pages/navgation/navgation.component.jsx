import { NavigationContainer, LogoContainer } from "./navgation.styles"
import { ReactComponent as HomeLogo } from '../../assets/icons/home-icon-silhouette-svgrepo-com.svg';
import { Outlet } from 'react-router-dom';
const Navgation = () => {
    return (
        <>
            <NavigationContainer>
                <LogoContainer to='/'>
                    <HomeLogo className='logo' />
                </LogoContainer>
            </NavigationContainer>
            <Outlet />
        </>

    )
}
export default Navgation;