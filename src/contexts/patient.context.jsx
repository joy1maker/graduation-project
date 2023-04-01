import { createContext, useState, useEffect } from "react";
import patients from "../assets/paitents";
export const PatientsContext = createContext({
    currentPatients: null,
    setCurrentPatients: () => null
})
export const PatientsProvider = ({ children }) => {
    useEffect(() => {
        //get paitents from db
    }, [])

    const reformatedPaitentData = patients.map((paitent) => ({ ...paitent, "urgent": paitent.urgent ? "uregent" : "-" }));
    const [currentPatients, setCurrentPatients] = useState(reformatedPaitentData);
    const value = { currentPatients, setCurrentPatients };
    return <PatientsContext.Provider value={value}>{children}</PatientsContext.Provider>
}