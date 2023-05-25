import { createContext, useContext } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { DoctorContext } from "./doctor.context";


export const PaitentsContext = createContext({
    paitents: null,
    isPaitentsLoading: null,
    isPaitentsError: null,
})
const fetchPaitents = async (id) => {
    return axios.get(`http://localhost:8000/paitent/${id}`)
}


export const PaitentsProvider = ({ children }) => {
    const { currentDoctor } = useContext(DoctorContext);
    const id = currentDoctor ? currentDoctor.id : -1;
    const { isLoading: isPaitentsLoading, isError: isPaitentsError, data } = useQuery('Paitents', () => fetchPaitents(id), { staleTime: 60000, retry: false });
    const paitents = data ? data.data : [];
    const value = { paitents, isPaitentsLoading, isPaitentsError };
    return <PaitentsContext.Provider value={value}>{children}</PaitentsContext.Provider>
}