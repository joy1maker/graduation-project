import QuestionContainer from "../question-component/question.component"
import { useContext, useState } from "react";
import { QuestionsContext } from "../../contexts/questions.context";
import { DoctorContext } from "../../contexts/doctor.context";
import { QuestionsContainer, Select } from './questions-container.styles'
import { motion } from "framer-motion";
const QustionsContainer = () => {
    const { currentQuestions } = useContext(QuestionsContext);
    const { currentDoctor } = useContext(DoctorContext);
    const { catigores } = currentDoctor;
    const [currentSelect, setCurrentSelect] = useState();
    const [FilterdQuestions, setFilterdQuestions] = useState(currentQuestions);
    const handleChange = (event) => {
        setCurrentSelect(event.target.value);
        const Filterd = currentQuestions.filter((question) => question.catigore === currentSelect);
        setFilterdQuestions(Filterd);
    }

    return (
        <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} exit={{ x: window.innerWidth }}>
            <Select onChange={handleChange} value={currentSelect} >
                {
                    catigores.map((catigore, idx) => <option key={idx} value={catigore}>{catigore}</option>)
                }
            </Select>
            <QuestionsContainer>
                {
                    FilterdQuestions.map((question) => <QuestionContainer key={question.id} catigores={catigores} question={question} />)
                }
            </QuestionsContainer>
        </motion.div>

    )
}
export default QustionsContainer;