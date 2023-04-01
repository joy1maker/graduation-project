import { Container } from "./patients-container.styles"
import { useContext } from "react";
import { PatientsContext } from "../../contexts/patient.context";
import BasicTable from "../react-table/react-table.component";
import { format } from 'date-fns'
import CoulmnFilter from "../react-table/tableFilter.component";
const PatientsContainer = () => {
    const { currentPatients } = useContext(PatientsContext)
    const COLUMNS = [
        {
            Header: "ID",
            accessor: "id",
            Filter: CoulmnFilter,
            disableFilters: true
        },
        {
            Header: 'Name',
            accessor: 'name',
            Filter: CoulmnFilter
        },
        {
            Header: 'Reservation Day',
            accessor: 'reservationDay',
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
                <BasicTable COLUMNS={COLUMNS} DATA={currentPatients} />

                {/* currentPatients.map((paitent, idx) => <PaitentFiled backgroundColor={backgroundColor[idx % 2]} patient={paitent} key={paitent.id} />) */}
            </Container>
        </>
    )
}
export default PatientsContainer;
