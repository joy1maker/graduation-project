import { Container } from "./patients-container.styles"
import { useContext } from "react";
import { ReservationContext } from "../../contexts/reservations.context";
import BasicTable from "../react-table/react-table.component";
import { format } from 'date-fns'
import CoulmnFilter from "../react-table/tableFilter.component";
const PatientsContainer = () => {
    const { reformatedReservationData: reservations } = useContext(ReservationContext)

    console.log(reservations)
    const COLUMNS = [
        {
            Header: "ID",
            accessor: "id",
            Filter: CoulmnFilter,
            disableFilters: true
        },
        {
            Header: 'Name',
            accessor: 'first_name',
            Filter: CoulmnFilter
        },
        {
            Header: 'Reservation Day',
            accessor: 'reservation_time',
            Cell: ({ value }) => { return format(new Date(value), 'dd/MM/yyyy') },
            Filter: CoulmnFilter,
            disableFilters: true
        },
        {
            Header: 'Urgency',
            accessor: 'urgent',
            Filter: CoulmnFilter,
            disableFilters: true
        },

    ]


    return (
        <>
            <Container>
                <BasicTable COLUMNS={COLUMNS} DATA={reservations} />
            </Container>
        </>
    )
}
export default PatientsContainer;
