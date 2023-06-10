import QuestionContainer from "../question-component/question.component"
import { useContext, useState } from "react";
import { QuestionsContext } from "../../contexts/questions.context";
import { DoctorContext } from "../../contexts/doctor.context";
import { QuestionsContainer, Select } from './questions-container.styles'
import { motion } from "framer-motion";
import ReplyComponent from "../reply/reply.component";
const QustionsContainer = () => {
    const { questions: currentQuestions, isQuestionsLoading } = useContext(QuestionsContext);
    const [currentSelect, setCurrentSelect] = useState();
    const [FilterdQuestions, setFilterdQuestions] = useState(currentQuestions);
    const [currentId, setCurrentId] = useState(null);
    const { doctorData } = useContext(DoctorContext);
    if (isQuestionsLoading) {
        return <div>is loading</div>
    }
    if (!doctorData) {
        return <></>
    }
    const { categories: catigores } = doctorData;
    const handleChange = (event) => {
        setCurrentSelect(event.target.value);
        const Filterd = currentQuestions.filter((question) => question.category !== currentSelect);
        setFilterdQuestions(Filterd);
    }
    return (
        <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} exit={{ x: window.innerWidth }}>
            <Select onChange={handleChange} value={currentSelect} style={{ marginLeft: "50%", translate: "-50%", width: "20vw" }}>
                {
                    catigores.map((catigore, idx) => <option key={idx} value={catigore}>{catigore}</option>)
                }
            </Select>
            <QuestionsContainer>
                {
                    FilterdQuestions.map((question) => <QuestionContainer key={question.id} catigores={catigores} question={question} setCurrentId={setCurrentId} />)
                }
            </QuestionsContainer>
            <hr />
            <ReplyComponent question={currentQuestions.find((que) => que.id === currentId)} />
        </motion.div>

    )
}
export default QustionsContainer;