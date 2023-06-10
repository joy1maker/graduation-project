import { createContext, useContext } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { DoctorContext } from "./doctor.context";
import URLS from "../assets/URLS";


const { fast } = URLS;
export const PaitentsContext = createContext({
    paitents: null,
    isPaitentsLoading: null,
    isPaitentsError: null,
})
const fetchPaitents = async (id) => {
    return axios.get(`${fast}/paitent/${id}`)
}


export const PaitentsProvider = ({ children }) => {
    const { doctor } = useContext(DoctorContext);
    const id = doctor ? doctor.id : -1;
    const { isLoading: isPaitentsLoading, isError: isPaitentsError, data } = useQuery('Paitents', () => fetchPaitents(id), { staleTime: 60000, retry: false, enabled: id !== -1 });
    const paitents = data ? data.data : [];
    console.log(paitents);
    const value = { paitents, isPaitentsLoading, isPaitentsError };
    return <PaitentsContext.Provider value={value}>{children}</PaitentsContext.Provider>
}