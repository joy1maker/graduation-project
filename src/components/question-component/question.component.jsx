import { useCollapse } from 'react-collapsed';
import { CollabsableContainer, Header, Content, AttatchmentsContainer } from './question.styles'
const QuestionContainer = ({ question }) => {
    const { getCollapseProps, getToggleProps } = useCollapse();
    const { question_title, question_body, attatchment } = question;
    return (
        <CollabsableContainer>
            <Header {...getToggleProps()}>
                {question_title}
            </Header>
            <div {...getCollapseProps()}>
                <Content>
                    {
                        question_body
                    }
                    <AttatchmentsContainer>
                        <img src={attatchment} alt="attatchment" />
                    </AttatchmentsContainer>
                </Content>
            </div>

        </CollabsableContainer>
    )
}
export default QuestionContainer;