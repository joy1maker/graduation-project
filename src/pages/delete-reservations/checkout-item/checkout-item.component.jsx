import { BaseSpan, ReservationContainer } from "./checkout-item.styles"
const ReservationField = ({ reservation }) => {
    const { first_name, last_name, reservation_time, id } = reservation;
    return (
        <ReservationContainer>
            <BaseSpan>
                {id}
            </BaseSpan>
            <BaseSpan>
                {first_name} {last_name}
            </BaseSpan>
            <BaseSpan>
                {reservation_time}
            </BaseSpan>

        </ReservationContainer>
    )
}
export default ReservationField;