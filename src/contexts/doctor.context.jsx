import axios from "axios";
import { createContext, useState, useEffect } from "react";
export const DoctorContext = createContext({
    currentDoctor: null,
    setCurrentDoctor: () => null
})

export const updateDoctor = async (doctor) => {
    const { id } = doctor;
    axios.put(`http://localhost:8000/doctor/${id}`, doctor)
}
export const DoctorProvider = ({ children }) => {


    const testDoctor = {
        "id": 1,
        "email": "nermeen33@gmail.com",
        "first_name": "nermeen",
        "last_name": "mohamed",
        "department": 2,
        "catigores": [
            "bones",
            "eyes"
        ],
        "image_name": "doc1.jpg",
        "department_name": "Department of General Surgery"
    }
    useEffect(() => {

    }, [])

    const [currentDoctor, setCurrentDoctor] = useState(testDoctor);

    const value = { currentDoctor, setCurrentDoctor };
    return <DoctorContext.Provider value={value}>{children}</DoctorContext.Provider>
}