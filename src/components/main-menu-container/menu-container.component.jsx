import { Container } from "./menu-container.styles"
import choices from "../../assets/menu";
import MenuItem from "../main-menu-item/menu-item";
import AOS from 'aos';
import { useEffect } from "react";
const MenuContainer = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div data-aos="fade-left">
            <Container>
                {
                    choices.map((choice) => <MenuItem choice={choice} key={choice.id} />)
                }
            </Container>
        </div>
    )
}
export default MenuContainer;