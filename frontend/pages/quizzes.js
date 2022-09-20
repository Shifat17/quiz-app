const POSTS_URL = process.env.NEXT_PUBLIC_BACKEND_API;
import Link from 'next/link';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { List } from 'semantic-ui-react';
export async function getServerSideProps({ req }) {
  const response = await axios.get(`${POSTS_URL}/quiz`);
  return {
    props: {
      quizes: response.data,
    },
  };
}

const quizzes = ({ quizes }) => {
  console.log(quizes);
  return (
    <div style={{ margin: '4rem' }}>
      <List divided relaxed>
        {quizes.map((quiz) => {
          return (
            <List.Item key={quiz.id}>
              <List.Content>
                <List.Header>
                  <Link href={`/quizzes/${quiz.id}`}>
                    <a>{quiz.name}</a>
                  </Link>
                </List.Header>
              </List.Content>
            </List.Item>
          );
        })}
      </List>
    </div>
  );
};

export default quizzes;
