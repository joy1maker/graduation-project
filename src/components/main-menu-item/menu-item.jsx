
import { useNavigate } from "react-router-dom";
import { Container, ImageContainer, DescrptionBox, MainContainer } from "./menu-item.styles"

const MenuItem = ({ choice }) => {

    const { title, imageUrl, route, descrption } = choice;
    const nav = useNavigate();
    const onNavigateHandler = () => {
        nav(`/${route}`);
    }
    return (
        <MainContainer>
            <Container onClick={onNavigateHandler}>
                <ImageContainer>
                    <img src={imageUrl} alt="icon" />
                </ImageContainer>
                <div>{title}</div>
            </Container>
            <DescrptionBox>
                {descrption}
            </DescrptionBox>
        </MainContainer>
    )
}
export default MenuItem;