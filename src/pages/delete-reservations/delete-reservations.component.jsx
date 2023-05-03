import { useContext, useState } from 'react';
import DateTimePicker from 'react-datetime-picker';
import { Container, Field } from './delete-reservations.styles'
import ModalComponent from '../../components/modal-component/modal.component';
import { Button } from 'react-bootstrap';
import { ReservationContext } from '../../contexts/reservations.context';
const DeleteReservationsPage = () => {
    const { reformatedReservationData: reservations } = useContext(ReservationContext)
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [show, setShow] = useState(false);
    const isBettwenDates = (date) => {
        const d = new Date(date);
        return d > startDate && d < endDate;
    }

    const filterdReservations = reservations.filter((reservation => isBettwenDates(reservation.reservation_time)));

    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true);

    }
    const bodyText = "by clicking yes all reservations within this time range will be canceld are you sure ?"
    return (
        <Container>
            <Field>
                <span>start date:</span>
                <DateTimePicker onChange={setStartDate} value={startDate} />
            </Field>
            <Field>
                <span>end date:</span>
                <DateTimePicker onChange={setEndDate} value={endDate} />
            </Field>
            <Button variant="danger" onClick={handleShow}>delete reservations</Button>
            <ModalComponent show={show} handleClose={handleClose} heading={"warning"} body={bodyText} filterdReservations={filterdReservations} />

        </Container>
    )
}
export default DeleteReservationsPage;