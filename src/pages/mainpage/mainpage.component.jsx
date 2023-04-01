import MenuContainer from "../../components/main-menu-container/menu-container.component";
import Authentcation from "../authentcation/auth.component";

const HomePage = () => {
    const user = true;

    return (
        <div>
            {
                user
                    ?
                    <MenuContainer />
                    :
                    <Authentcation />
            }
        </div>
    )
}
export default HomePage;