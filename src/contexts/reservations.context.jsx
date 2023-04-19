import { createContext } from "react";
import axios from "axios";
import { useQuery } from "react-query";




export const ReservationContext = createContext({
    reformatedReservationData: null,
    isReservationsLoading: null,
    isReservationsError: null
})
const fetchReservations = async () => {

    return axios.get('http://localhost:8000/reservation/4')
}

export const ReservationProvider = ({ children }) => {

    const { isLoading: isReservationsLoading, isError: isReservationsError, data } = useQuery('Reservations', fetchReservations, { staleTime: 60000, retry: false });
    const reservations = data ? data.data : [];
    const reformatedReservationData = reservations.map((reservation) => ({ ...reservation, "urgent": reservation.urgent ? "uregent" : "-" }));
    const value = { reformatedReservationData, isReservationsLoading, isReservationsError };
    return <ReservationContext.Provider value={value}>{children}</ReservationContext.Provider>
}