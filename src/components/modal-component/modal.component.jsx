import Button from 'react-bootstrap/Button';
import { StyledModal } from './modal.styles'
import { useContext, useState } from 'react';
import { ClockLoader } from 'react-spinners';
import { ReservationContext } from '../../contexts/reservations.context';

const ModalComponent = ({ show, handleClose, heading, body, filterdReservations }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [suc, setSuc] = useState(false);
    const { deleteReservations } = useContext(ReservationContext);
    if (suc) {
        setTimeout(function () { handleClose(); }, 4000);
        setSuc(false);
    }
    const override = {
        display: "block",
        margin: "0 auto",
        marginBottom: "50px"
    };

    const onDeleteHandler = () => {
        deleteReservations(filterdReservations, setIsLoading, setIsError, setSuc);

    }


    return (
        <>

            <StyledModal show={show} onHide={handleClose} animation={true} >
                <StyledModal.Header closeButton>
                    <StyledModal.Title>{heading}</StyledModal.Title>
                </StyledModal.Header>
                <StyledModal.Body>{body}</StyledModal.Body>
                <StyledModal.Footer>
                    <Button variant="danger" onClick={onDeleteHandler}>
                        yes
                    </Button>
                    <Button variant="secondary" onClick={handleClose}>
                        no
                    </Button>
                </StyledModal.Footer>
                <br />
                <ClockLoader
                    color={"#000"}
                    loading={isLoading}
                    cssOverride={override}
                    size={150}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
                {isError && <div style={{ color: "red" }}>an error occured please try again later</div>}
            </StyledModal>
        </>
    )
}
export default ModalComponent;