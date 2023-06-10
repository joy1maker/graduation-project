import { useCollapse } from 'react-collapsed';
import { CollabsableContainer, Header, Content, AttatchmentsContainer } from './question.styles'
import Button from 'react-bootstrap/Button';

const QuestionContainer = ({ question, setCurrentId }) => {
    const { getCollapseProps, getToggleProps } = useCollapse();
    const { title, body, attatchments: attatchment, id } = question;
    const onClickHandler = () => {
        setCurrentId(id);
    }
    return (
        <CollabsableContainer>
            <Header {...getToggleProps()}>
                {title}
            </Header>
            <div {...getCollapseProps()}>
                <Content>
                    {
                        body
                    }
                    <AttatchmentsContainer>

                        {
                            attatchment === "[]"
                                ?
                                <></>
                                :
                                <img src={attatchment} alt="attatchment" />
                        }
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