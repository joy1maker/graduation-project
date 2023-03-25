
import { useNavigate } from "react-router-dom";
import { Container, ImageContainer } from "./menu-item.styles"
const MenuItem = ({ choice }) => {

    const { title, imageUrl, route } = choice;
    const nav = useNavigate();
    const onNavigateHandler = () => {
        nav(`/${route}`);
    }
    return (
        <Container onClick={onNavigateHandler}>
            <ImageContainer>
                <img src={imageUrl} alt="icon" />
            </ImageContainer>
            <div>{title}</div>

        </Container>
    )
}
export default MenuItem;