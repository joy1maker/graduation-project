import { Container } from "./menu-container.styles"
import choices from "../../assets/menu";
import MenuItem from "../main-menu-item/menu-item";
import AOS from 'aos';
import { useEffect } from "react";
import { motion } from "framer-motion";
const MenuContainer = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} exit={{ x: window.innerWidth }} >
            <Container>
                {
                    choices.map((choice) => <MenuItem choice={choice} key={choice.id} />)
                }
            </Container>
        </motion.div>
    )
}
export default MenuContainer;