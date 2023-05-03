import { useCollapse } from 'react-collapsed';
import { CollabsableContainer, Header, Content, AttatchmentsContainer } from './question.styles'
import Button from 'react-bootstrap/Button';

const QuestionContainer = ({ question, setCurrentId }) => {
    const { getCollapseProps, getToggleProps } = useCollapse();
    const { question_title, question_body, attatchment, id } = question;
    const onClickHandler = () => {
        setCurrentId(id);
    }
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
                    <Button variant="primary" onClick={onClickHandler}>
                        reply &#8594;
                    </Button>
                </Content>
            </div>

        </CollabsableContainer>
    )
}
export default QuestionContainer;