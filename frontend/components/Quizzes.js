import Link from 'next/link';
import { Button, List } from 'semantic-ui-react';
import Image from 'next/image';
import { Card, Icon } from 'semantic-ui-react';
const Quizzes = ({ quizes }) => {
  return (
    <div style={{ margin: '4rem' }}>
      {quizes.map((quiz) => {
        console.log(quiz.image_url);
        const userIds = [];
        quiz.users.forEach((user) => {
          userIds.push(user.id);
        });
        const uniqArr = userIds.filter((v, i, a) => a.indexOf(v) === i);
        return (
          <Card>
            {/* <Image src={quiz.image_url} width={'200px'} height={'200px'} /> */}
            <Card.Content>
              <Card.Header>{quiz.name}</Card.Header>
              <Card.Description>{quiz.description}</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <p>Number of Users took this quiz: {uniqArr.length}</p>
              <Link href={`/quizzes/${quiz.id}`}>
                <a>
                  <Button>Go to the quiz page</Button>
                </a>
              </Link>
            </Card.Content>
          </Card>
        );
      })}
    </div>
  );
};

export default Quizzes;
