import { createContext } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { sendEmails } from "../assets/email";
import { useContext } from "react";
import { DoctorContext } from "./doctor.context";
import URLS from "../assets/URLS";
const { fast } = URLS;


export const ReservationContext = createContext({
    reformatedReservationData: null,
    isReservationsLoading: null,
    isReservationsError: null,
    deleteReservations: () => null,
    refetchReservations: () => null
})
const fetchReservations = async (id) => {
    return axios.get(`http://localhost:8000/api/doctor-reservations/${id}`)
}
const deleteReservations = async (reservations, setIsLoading, setIsError, setSuc, filterdPaitents) => {
    const cancelTokenSource = axios.CancelToken.source();
    const requests = reservations.map((reservation) => axios.delete(`${fast}/reservation/${reservation.id}`, {
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
    const { doctor } = useContext(DoctorContext)
    const { isLoading: isReservationsLoading, isError: isReservationsError, data, refetch: refetchReservations } = useQuery('Reservations', () => fetchReservations(doctor.id), { staleTime: 60000, retry: false, enabled: doctor !== null });
    const reservations = data ? data.data : [];
    const reformatedReservationData = reservations.map((reservation) => ({ ...reservation, "urgent": reservation.urgent ? "uregent" : "-" }));
    const value = { reformatedReservationData, isReservationsLoading, isReservationsError, deleteReservations, refetchReservations };
    return <ReservationContext.Provider value={value}>{children}</ReservationContext.Provider>
}