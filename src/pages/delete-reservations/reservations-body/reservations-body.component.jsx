import ReservationField from '../checkout-item/checkout-item.component'
import { ReservationsContainer, ContainerHeader, HeaderBlock, Total, TableContainer } from './reservations-body.styles'
const ReservationsBody = ({ reservations }) => {
    const urgentReservations = reservations.reduce((accumlator, reservation) => accumlator + (reservation.urgent !== "-" ? 1 : 0), 0);
    return (
        <ReservationsContainer>
            <TableContainer>
                <ContainerHeader>
                    <HeaderBlock>id</HeaderBlock>
                    <HeaderBlock>full name</HeaderBlock>
                    <HeaderBlock>date</HeaderBlock>
                </ContainerHeader>
                {reservations.map((reservation, idx) => <ReservationField key={idx} reservation={reservation} />)}
            </TableContainer>
            <Total>Total urget meetings : {urgentReservations}</Total>
        </ReservationsContainer>
    )
}
export default ReservationsBody;