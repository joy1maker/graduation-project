import { createContext, useState, useEffect } from "react";
export const DoctorContext = createContext({
    currentDoctor: null,
    setCurrentDoctor: () => null
})
export const DoctorProvider = ({ children }) => {

    const testDoctor = {
        email: 'youssiffayez2@gmail.com',
        fullName: 'youssif fayez abdel twab',
        department: 'Department of General Surgery',
        catigores: ['first mid pregnency', "second mid pregnency", "third mid pregnency", "after pregnency"]
    }
    useEffect(() => {
        //get doctor from db
    }, [])

    const [currentDoctor, setCurrentDoctor] = useState(testDoctor);
    const value = { currentDoctor, setCurrentDoctor };
    return <DoctorContext.Provider value={value}>{children}</DoctorContext.Provider>
}