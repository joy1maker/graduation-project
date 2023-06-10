import { createContext } from "react";
import { useContext } from "react";
import { DoctorContext } from "./doctor.context";
import { useQuery } from "react-query";
import axios from "axios";
export const QuestionsContext = createContext({
    questions: [],
    isQuestionsLoading: null,
    isQuestionsError: null,
    refetchQuestions: () => null
})

const fetchQuestions = async (id) => {
    const { data } = await axios.get(`http://localhost:8000/api/doctor-questions/${id}`);
    return data;
}
export const QuestionsProvider = ({ children }) => {

    const { doctor } = useContext(DoctorContext)
    const { isLoading: isQuestionsLoading, isError: isQuestionsError, data, refetch: refetchQuestions } = useQuery('Questions', () => fetchQuestions(doctor.id), { staleTime: 60000, retry: false, enabled: doctor !== null });
    const questions = data ? data : [];
    const value = { questions, isQuestionsLoading, isQuestionsError, refetchQuestions };
    return <QuestionsContext.Provider value={value}>{children}</QuestionsContext.Provider>
}