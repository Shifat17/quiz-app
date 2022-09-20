import { Button, Dropdown, Form } from 'semantic-ui-react';
import { Grid } from 'semantic-ui-react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import {
  addNewQuestion,
  updateQuiz,
} from '../../../../src/features/quizes/quizesSlice';
const POSTS_URL = process.env.NEXT_PUBLIC_BACKEND_API;

export async function getServerSideProps(context) {
  const response = await axios.get(`${POSTS_URL}/quiz/${context.query.id}`);

  return {
    props: {
      quiz: response.data[0],
    },
  };
}

const statusOptions = [
  { key: 1, text: 'paid', value: 'paid' },
  { key: 2, text: 'free', value: 'free' },
];

const timingOptions = [
  { key: 1, text: 'per-question', value: 'perQuestion' },
  { key: 2, text: 'per-quiz', value: 'perQuiz' },
];

const answerSeeingOptions = [
  {
    key: 1,
    text: 'see answerper quiz',
    value: 'perquiz',
  },
  {
    key: 2,
    text: 'see answerper question',
    value: 'perquestion',
  },
  {
    key: 3,
    text: 'see answerper retake',
    value: 'perretake',
  },
];

const EditQuize = ({ quiz }) => {
  console.log(quiz);
  const router = useRouter();
  const [A, setOptionA] = useState('');
  const [B, setOptionB] = useState('');
  const [C, setOptionC] = useState('');
  const [D, setOptionD] = useState('');
  const [ans_1, setAns_1] = useState(null);
  const [ans_2, setAns_2] = useState(null);
  const [name, setName] = useState(quiz.name);
  const [price, setPrice] = useState(Number(quiz.price));
  const [reTake, setreTake] = useState(Number(quiz.retake));
  const [description, setDescription] = useState(quiz.description);
  const [changeImage, setChangeImage] = useState(false);
  const [status, setStatus] = useState(quiz.status);
  const [image, setImage] = useState(quiz.image_url);
  const [quizTime, setQuizTime] = useState(Number(quiz.quiz_time));
  const [question, setQuestion] = useState('');
  const [answerseeoptions, setanswerSeeOptions] = useState(quiz.ansseeopt);
  const [imageInput, setImageInput] = useState(null);
  const [timing, setTiming] = useState(quiz.timing);
  // const [showQuestionButton, setshowQuestionButton] = useState(false);
  const [showquestionsForm, setShowQuestionsForm] = useState(false);
  const dispatch = useDispatch();
  const handleStatusDropDown = (e, data) => {
    console.log(data.value);
    setStatus(data.value);
  };

  const submitQuestionHandler = () => {
    console.log(quiz.id);
    const options = [A, B, C, D];
    let answers;
    if (ans_1 == null) {
      answers = [ans_2];
    } else if (ans_2 == null) {
      answers = [ans_1];
    } else {
      answers = [ans_1, ans_2];
    }
    setOptionA('');
    setOptionB('');
    setOptionC('');
    setOptionD('');
    setQuestion('');
    setAns_1(null);
    setAns_2(null);
    setShowQuestionsForm(false);
    dispatch(addNewQuestion({ id: quiz.id, question, options, answers }));
  };

  const handleTimingDropDown = (e, data) => {
    console.log(data.value);
    setTiming(data.value);
  };

  const submitQuizHanlder = () => {
    const form = new FormData();
    // setshowQuestionButton(true);
    // setQuizName(name);
    if (price == null) {
      form.append('price', 0);
    } else {
      form.append('price', price);
    }
    form.append('id', quiz.id);
    form.append('retake', reTake);
    form.append('status', status);
    form.append('timing', timing);
    form.append('name', name);
    form.append('description', description);
    form.append('quiz_time', quizTime);
    form.append('ansseeopt', answerseeoptions);
    dispatch(updateQuiz(form));
    router.push('/account/admin/dashboard');
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    setImageInput(file);
    console.log(file);
    const fileReader = new FileReader();
    fileReader.onload = function (e) {
      setImage(e.target.result);
    };
    fileReader.readAsDataURL(file);
  };

  const handleanswerDropDown = (e, data) => {
    setanswerSeeOptions(data.value);
  };

  const stopquestionhandler = () => {};

  return (
    <div style={{ margin: '5rem' }}>
      <>
        <h2>Edit Quiz</h2>
        <Grid>
          <Grid.Row>
            <Grid.Column width={8}>
              <Form>
                <Form.Field>
                  <label>quiz name</label>
                  <input
                    placeholder="name"
                    value={name}
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                  />
                </Form.Field>
                <Form.Field>
                  <label>description</label>
                  <textarea
                    placeholder="description"
                    value={description}
                    type="text"
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </Form.Field>
                <Form.Field>
                  <label>price</label>
                  <input
                    placeholder="price"
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    disabled={status != 'paid'}
                  />
                </Form.Field>
                <Form.Field>
                  <label>Quiz Time</label>
                  <input
                    placeholder="time"
                    type="number"
                    value={quizTime}
                    onChange={(e) => setQuizTime(e.target.value)}
                  />
                </Form.Field>

                <Dropdown
                  style={{
                    display: 'block',
                    width: '6rem',
                    marginBottom: '1rem',
                  }}
                  placeholder="status"
                  onChange={handleStatusDropDown}
                  search
                  selection
                  value={status}
                  options={statusOptions}
                />
                <Dropdown
                  placeholder="timing"
                  onChange={handleTimingDropDown}
                  search
                  value={timing}
                  selection
                  options={timingOptions}
                />

                {/* <div>
          <Image
            src={image ? image : ''}
            style={{ width: '100px', height: '100px' }}
          />
        </div> */}
              </Form>
            </Grid.Column>
            <Grid.Column width={8}>
              <Form>
                <Form.Field>
                  <label>Number of Retake</label>
                  <input
                    type="number"
                    value={reTake}
                    onChange={(e) => setreTake(e.target.value)}
                  />
                </Form.Field>
                <Dropdown
                  placeholder="answer seeing options"
                  onChange={handleanswerDropDown}
                  search
                  value={answerseeoptions}
                  selection
                  options={answerSeeingOptions}
                />
              </Form>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <div style={{ marginTop: '3rem', marginBottom: '2rem' }}>
          <Button onClick={submitQuizHanlder}>Update QUiz</Button>
        </div>
        {changeImage ? (
          <Form>
            <Form.Field>
              <label>file</label>
              <input type="file" onChange={handleImage} />
            </Form.Field>
            <Button color="brown">Set New Image</Button>
          </Form>
        ) : (
          <Button color="pink" onClick={() => setChangeImage(true)}>
            change Image
          </Button>
        )}
      </>
      <div style={{ marginTop: '5rem', marginBottom: '3rem' }}>
        <h2>Add questions for the quiz</h2>
        <Button
          color="violet"
          style={{ marginBottom: '3rem' }}
          onClick={() => setShowQuestionsForm(true)}
        >
          Add Questions
        </Button>
      </div>

      {showquestionsForm && (
        <Form size="small">
          <Form.Group widths="equal">
            <Form.Field width={12}>
              <label>Enter your question</label>
              <input
                type="text"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
              />
            </Form.Field>
            <Form.Field>
              <label>optionA</label>
              <input
                type="text"
                value={A}
                onChange={(e) => setOptionA(e.target.value)}
              />
            </Form.Field>
            <Form.Field>
              <label>optionB</label>
              <input
                type="text"
                value={B}
                onChange={(e) => setOptionB(e.target.value)}
              />
            </Form.Field>
            <Form.Field>
              <label>optionC</label>
              <input
                type="text"
                value={C}
                onChange={(e) => setOptionC(e.target.value)}
              />
            </Form.Field>
            <Form.Field>
              <label>optionD</label>
              <input
                type="text"
                value={D}
                onChange={(e) => setOptionD(e.target.value)}
              />
            </Form.Field>
            <Form.Field>
              <label>Answer_1</label>
              <input
                type="text"
                value={ans_1}
                onChange={(e) => setAns_1(e.target.value)}
              />
            </Form.Field>
            <Form.Field>
              <label>Answer_2</label>
              <input
                type="text"
                value={ans_2}
                onChange={(e) => setAns_2(e.target.value)}
              />
            </Form.Field>
          </Form.Group>
          <Button
            type="submit"
            onClick={submitQuestionHandler}
            style={{ marginBottom: '2rem' }}
          >
            Submit question
          </Button>
          <Button
            color="red"
            onClick={stopquestionhandler}
            style={{ marginBottom: '2rem', marginLeft: '2rem' }}
          >
            Stop Adding question
          </Button>
        </Form>
      )}
    </div>
  );
};

export default EditQuize;
