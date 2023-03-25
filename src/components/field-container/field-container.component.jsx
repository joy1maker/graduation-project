import { Container, Filed } from "./field-container.styles"

const PaitentFiled = ({ backgroundColor, patient }) => {
    const { name, reservationDay, reservationHour, urgent } = patient;
    return (
        <>
            <Container backgroundColor={backgroundColor}>
                <Filed>{name}</Filed>
                <Filed>{urgent ? "urgent" : "-"}</Filed>
                <Filed>{reservationDay.toDateString()} : {reservationHour}</Filed>
                <Filed>read more</Filed>
            </Container>
        </>
    )
}
export default PaitentFiled;