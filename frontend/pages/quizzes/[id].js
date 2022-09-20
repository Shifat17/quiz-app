import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Segment } from 'semantic-ui-react';

import { getQuestions, getQuiz } from '../../src/features/quizes/quizesSlice';

const POSTS_URL = process.env.NEXT_PUBLIC_BACKEND_API;
import Link from 'next/link';
import axios from 'axios';

import { List } from 'semantic-ui-react';
export async function getServerSideProps(context) {
  const id = context.params.id;
  const response = await axios.get(`${POSTS_URL}/quiz/${id}`);
  return {
    props: {
      quiz: response.data[0],
    },
  };
}

const SingleQuiz = ({ quiz }) => {
  const users = useSelector((state) => state.users);
  const user = users.user[0]?.user;
  console.log('single quiz user', user);
  const router = useRouter();
  const { id } = router.query;
  console.log(quiz);
  const dispatch = useDispatch();

  const handlestartquiz = () => {
    dispatch(getQuestions({ quizid: id, userId: user.id }));
    dispatch(getQuiz({ quizid: id }));
    router.push('/quizzes/questions');
  };

  const statusElement =
    quiz.status == 'paid' ? (
      <div>
        So this is a {quiz.status} quiz you have to pay {quiz.price} to attempt
        this quiz
      </div>
    ) : (
      <div>
        So this is a {quiz.status} quiz you have to pay nothing to attempt this
        quiz
      </div>
    );

  return (
    <div style={{ margin: '5rem' }}>
      <div>
        <Segment>
          {statusElement}
          <p>you can take {quiz.retake} retake;</p>
          <p>This quiz has a {quiz.timing} base timing;</p>
          so you will get {quiz.quiz_time} seconds {quiz.timing}
        </Segment>
        <Button color="red" onClick={handlestartquiz}>
          Start Quiz
        </Button>
      </div>
    </div>
  );
};

export default SingleQuiz;
