import { useState } from 'react';
import {
  answerChanged,
  deleteChecked,
} from '../../src/features/quizes/quizesSlice';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Checkbox, Form } from 'semantic-ui-react';
import Question from '@/components/Question';

const questions = () => {
  const dispatch = useDispatch();
  const questions = useSelector((state) => state.quizes.questions[0]);
  const quiz = useSelector((state) => state.quizes.quiz[0]);
  console.log('quiz', quiz[0].timing);
  const [quiztime, setQuizTime] = useState(true);
  const [showAnswer, setShowAnswer] = useState(false);
  const [showAnswerAfterRetake, setShowAnswerAfterRetake] = useState(false);
  const [showQuestion, setShowQuestion] = useState(true);
  const [showAnsAftRe, setShowAnsAftRe] = useState(false);
  const [showscore, setShowscore] = useState(false);
  const [deleteR, setDeletR] = useState(true);
  const [showMessage, setShowMessage] = useState(false);
  const [retake, setreTake] = useState(2);
  const [showretakeButton, setShowRetakeButton] = useState(false);
  const [count, setCount] = useState(0);
  const [score, setScore] = useState(0);
  const [queIndex, setQueIndex] = useState(0);

  const handleQuestionSubmit = (id) => {
    const answers = questions[id].answers;
    const options = questions[id].options;
    const filterOptions = options.filter((option) => {
      return option.checked == true;
    });
    const optionArr = [];
    filterOptions.forEach((option) => {
      for (const item in option) {
        if (item == 'title') {
          optionArr.push(option[item]);
        }
      }
    });

    const newans = [...answers];
    const c = newans.sort().join(',') === optionArr.sort().join(',');
    // console.log(c);
    if (c == true) {
      setScore(score + 1);
    }

    if (queIndex == questions.length - 1) {
      setShowscore(true);
      if (retake == 0) {
        setShowRetakeButton(false);
        setShowMessage(true);
        setShowAnswer(true);
      } else {
        setShowRetakeButton(true);
      }
      setShowQuestion(false);
      dispatch(deleteChecked());
    } else {
      setQueIndex(queIndex + 1);
      if (quiz[0].timing === 'perQuestion') {
        setCount(count + 1);
      }
    }
  };

  const handleAnswerChange = (e, index, qindex) => {
    const value = e.target.checked;
    dispatch(
      answerChanged({
        value,
        index,
        qindex,
      })
    );
  };

  const handleShowAnswerBtn = () => {
    setShowRetakeButton(false);
    setShowAnsAftRe(false);
    setShowAnswer(true);
  };

  const handleRetakeButtonClick = () => {
    if (retake > 0) {
      setreTake(retake - 1);
      setScore(0);
      setQueIndex(0);
      setShowQuestion(true);
      setShowscore(false);
      setShowRetakeButton(false);
    }
  };

  const gonext = () => {
    if (queIndex == questions.length - 1) {
      setShowRetakeButton(true);
      setShowscore(true);
      setShowQuestion(false);
      dispatch(deleteChecked());
    } else {
      setQueIndex(queIndex + 1);
      setCount(count + 1);
    }
  };

  const shows = () => {
    setShowscore(true);
  };

  const message = (
    <div>You have taken all the retakes your final score is {score}</div>
  );

  let answers = questions.map((question, index) => {
    return (
      <>
        <h2>Answer for Question{index + 1} =</h2>
        {question.answers.map((answer) => {
          return <p>{answer}</p>;
        })}
      </>
    );
  });

  return (
    <div style={{ margin: '5rem' }}>
      {showscore && <p>{score}</p>}
      {showretakeButton && deleteR && (
        <Button onClick={handleRetakeButtonClick}>retake</Button>
      )}
      {showAnsAftRe && (
        <Button onClick={handleShowAnswerBtn}>Show Answer</Button>
      )}
      {showQuestion && (
        <Question
          question={questions[queIndex]}
          qindex={queIndex}
          count={count}
          gonext={gonext}
          quizTimer={quiz[0].timing}
          shows={shows}
          quiztime={quiz[0].quiz_time}
          handleAnswerChange={handleAnswerChange}
          handleQuestionSubmit={handleQuestionSubmit}
        />
      )}
      {showMessage && message}
      {showAnswer && answers}
    </div>
  );
};

export default questions;
