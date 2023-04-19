import MenuContainer from "../../components/main-menu-container/menu-container.component";
import Authentcation from "../authentcation/auth.component";

const HomePage = () => {
    const user = true;

    return (
        <>
            {
                user
                    ?

                    <MenuContainer />
                    :
                    <Authentcation />
            }
        </>
    )
}
export default HomePage;