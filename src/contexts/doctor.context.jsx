import axios from "axios";
import { createContext, useEffect, useState } from "react";
export const DoctorContext = createContext({
    doctor: null,
    doctorData: null,
    doctorLogin: () => null,
    doctorLogout: () => null,
})

export const updateDoctor = async (doctor) => {
    const { id } = doctor;
    console.log(doctor);
}

export const DoctorProvider = ({ children }) => {

    const [doctor, setDoctor] = useState(null);
    const [doctorData, setDoctorData] = useState(null)
    useEffect(() => {
        const getLocalData = async () => {
            const doctorStringData = await localStorage.getItem("doctor")
            if (doctorStringData) {
                const doctorObject = await JSON.parse(doctorStringData);
                const { doctor, api_token } = doctorObject;
                setDoctor(doctor);
                const { data } = await axios.get(`http://localhost:8000/api/show-doctor/${doctor.id}?api_token=${api_token}`)
                const doctorData = data.data;
                doctorData["categories"] = await JSON.parse(doctorData.categories);
                setDoctorData(doctorData);
            }
        }
        getLocalData();
    }, [])

    const doctorLogin = async (email, password) => {
        try {
            const result = await axios.post(`http://localhost:8000/api/login-doctor?email=${email}&password=${password}`);
            const { doctor, api_token } = result.data;
            setDoctor(doctor);
            const doctorDataRequest = await axios.get(`http://localhost:8000/api/show-doctor/${doctor.id}?api_token=${api_token}`)
            setDoctorData(doctorDataRequest.data);
            return {
                ...result,
                "status": "200"
            };
        }
        catch (error) {
            return error.response.data;
        }

    }


    const doctorLogout = async () => {
        const result = await axios.post(`http://localhost:8000/api/logout-doctor?api_token=${doctor.api_token}`);
        setDoctor(null);

    }
    const value = { doctor, doctorLogin, doctorLogout, doctorData };
    return <DoctorContext.Provider value={value}>{children}</DoctorContext.Provider>
}