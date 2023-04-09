import { createContext, useState, useEffect } from "react";
import questions from "../assets/questions";
export const QuestionsContext = createContext({
    currentQuestions: null,
    setCurrentQuestions: () => null
})
export const QuestionsProvider = ({ children }) => {

    useEffect(() => {
        //get doctor from db
    }, [])

    const [currentQuestions, setCurrentQuestions] = useState(questions);
    const value = { currentQuestions, setCurrentQuestions };
    return <QuestionsContext.Provider value={value}>{children}</QuestionsContext.Provider>
}