import { createContext, useState, useEffect } from "react";
import patients from "../assets/paitents";
export const PatientsContext = createContext({
    currentPatients: null,
    setCurrentPatients: () => null
})
export const PatientsProvider = ({ children }) => {
    useEffect(() => {

    }, [])


    const [currentPatients, setCurrentPatients] = useState(patients);
    const value = { currentPatients, setCurrentPatients };
    return <PatientsContext.Provider value={value}>{children}</PatientsContext.Provider>
}