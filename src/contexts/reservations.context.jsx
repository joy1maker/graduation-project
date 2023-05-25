import { createContext } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { sendEmails } from "../assets/email";




export const ReservationContext = createContext({
    reformatedReservationData: null,
    isReservationsLoading: null,
    isReservationsError: null,
    deleteReservations: () => null
})
const fetchReservations = async () => {
    return axios.get('http://localhost:8000/reservation/doctor/1')
}
const deleteReservations = async (reservations, setIsLoading, setIsError, setSuc, filterdPaitents) => {
    const cancelTokenSource = axios.CancelToken.source();
    const requests = reservations.map((reservation) => axios.delete(`http://localhost:8000/reservation/${reservation.id}`, {
        cancelToken: cancelTokenSource.token
    }));
    setIsLoading(true);

    axios.all(requests).then((responses) => {
        setSuc(true);
        setTimeout(function () { setIsLoading(false); }, 3000);
    }).catch((error) => {
        if (axios.isCancel(error)) {
            alert('requests were canceld');
        } else {
            // Request failed, handle error and cancel other requests
            cancelTokenSource.cancel('Request failed');
        }
        setIsError(true)
    });
    sendEmails(filterdPaitents);
}

export const ReservationProvider = ({ children }) => {

    const { isLoading: isReservationsLoading, isError: isReservationsError, data } = useQuery('Reservations', fetchReservations, { staleTime: 60000, retry: false });
    const reservations = data ? data.data : [];
    const reformatedReservationData = reservations.map((reservation) => ({ ...reservation, "urgent": reservation.urgent ? "uregent" : "-" }));
    const value = { reformatedReservationData, isReservationsLoading, isReservationsError, deleteReservations };
    return <ReservationContext.Provider value={value}>{children}</ReservationContext.Provider>
}