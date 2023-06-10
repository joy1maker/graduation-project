import { Editor } from '@tinymce/tinymce-react';
import axios from 'axios';
import { useState } from 'react';
import mustache from 'mustache';
import { Container } from './word-document.styles'
import { template } from '../../assets/word-template';
import { Button } from 'react-bootstrap';
import { calculateAge } from '../reply/reply.component';
const WordDocument = ({ paitent }) => {
    const [editorContent, setEditorContent] = useState('');
    console.log(paitent);

    const templateString = template;
    const renderedString = mustache.render(templateString, { ...paitent, age: calculateAge(paitent.birth_date) });
    const sendDataToBackend = () => {
        axios.post('/api/word-document', { content: editorContent })
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    };
    return (
        <Container>
            <Editor
                apiKey="9i2utvvaqgvfouothbj4y06lzekaq1lwnxbtscxw06rr5zfd"
                initialValue={renderedString}
                init={{
                    height: 800,
                    menubar: 'file edit view insert format tools table',
                    toolbar:
                        'undo redo | formatselect | bold italic underline strikethrough | \
                        alignleft aligncenter alignright alignjustify | \
                        bullist numlist outdent indent | link image | code',
                    content_style: 'body { font-family: Arial, sans-serif; font-size: 14px }',
                }}
                onEditorChange={setEditorContent}
            />
            <Button variant='secondary'>save changes</Button>
        </Container>

    );
};

export default WordDocument;