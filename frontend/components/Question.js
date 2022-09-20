import { useEffect, useRef, useState } from 'react';
import { Form, Button } from 'semantic-ui-react';

const Question = ({
  question,
  handleAnswerChange,
  qindex,
  count,
  quiztime,
  shows,
  gonext,
  quizTimer,
  handleQuestionSubmit,
}) => {
  console.log(quizTimer);
  const intervalRef = useRef(null);
  const [timer, setTimer] = useState('00');

  const getTimeRemaining = (endtime) => {
    const total = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    return {
      seconds,
      total,
    };
  };

  //   update the timer and also stop it when reaches to 0

  const startTimer = (deadline) => {
    let { seconds, total } = getTimeRemaining(deadline);
    if (total >= 0) {
      setTimer(seconds > 9 ? seconds : '0' + seconds);
    } else {
      clearInterval(intervalRef.current);
      if (quizTimer == 'perQuestion') {
        gonext();
      }
      if (quizTimer == 'perQuiz') {
        shows();
      }
    }
  };
  //  use this function when updating the question
  const clearTimer = (endtime) => {
    setTimer(quiztime);
    if (intervalRef.current) clearInterval(intervalRef.current);
    const id = setInterval(() => {
      startTimer(endtime);
    }, 1000);
    intervalRef.current = id;
  };

  const getDeadlineTime = () => {
    let deadline = new Date();
    deadline.setSeconds(deadline.getSeconds() + Number(quiztime));
    return deadline;
  };

  useEffect(() => {
    clearTimer(getDeadlineTime());
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [count]);
  return (
    <div>
      <div style={{ postion: 'absolute', top: '5rem', left: '5rem' }}>
        <h2>{question.question}</h2>
        <Form key={qindex}>
          {question.options.map((option, index) => {
            return (
              <Form.Field>
                <input
                  type="checkbox"
                  checked={option.checked}
                  value={index}
                  onChange={(e) => handleAnswerChange(e, index, qindex)}
                />
              </Form.Field>
            );
          })}
        </Form>
        <div style={{ marginTop: '2rem' }}>
          <Button color="green" onClick={() => handleQuestionSubmit(qindex)}>
            Next
          </Button>
        </div>
        <div style={{ position: 'absolute', top: '2rem', right: '4rem' }}>
          {timer}
        </div>
      </div>
    </div>
  );
};

export default Question;
