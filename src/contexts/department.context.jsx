import { createContext } from "react";
import axios from "axios";
import { useQuery } from "react-query";

export const DepartmentContext = createContext({
    Departments: null,
    isDepartmentsLoading: false,
    isDepartmentsError: false
})
const fetchDepartments = async () => {
    return axios.get('http://localhost:8000/department/all');

}
export const DepartmentProvider = ({ children }) => {
    const { isLoading: isDepartmentsLoading, isError: isDepartmentsError, data } = useQuery('departments', fetchDepartments, { staleTime: 60000, retry: false });
    const Departments = data ? data.data : [];
    const value = { Departments, isDepartmentsLoading, isDepartmentsError };
    return <DepartmentContext.Provider value={value}>{children}</DepartmentContext.Provider>
}