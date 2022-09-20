import { Button } from 'semantic-ui-react';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import Link from 'next/link';
import { Header, Table, Rating } from 'semantic-ui-react';
import axios from 'axios';
import { deleteQuiz } from '../../../src/features/quizes/quizesSlice';
const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_API;

const Dashboard = ({ quizes }) => {
  console.log(quizes);
  const router = useRouter();
  const dispatch = useDispatch();
  const deleteHandler = (id) => {
    dispatch(deleteQuiz({ id }));
    router.reload(window.location.pathname);
  };
  return (
    <div style={{ margin: '5rem' }}>
      <Table celled padded>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>name</Table.HeaderCell>
            <Table.HeaderCell>descriptions</Table.HeaderCell>
            <Table.HeaderCell>status</Table.HeaderCell>
            <Table.HeaderCell>submissions</Table.HeaderCell>
            <Table.HeaderCell>edit</Table.HeaderCell>
            <Table.HeaderCell>delete</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {quizes.map((quiz) => {
            return (
              <Table.Row key={quiz.id}>
                <Table.Cell>{quiz.name}</Table.Cell>
                <Table.Cell>{quiz.description}</Table.Cell>
                <Table.Cell>{quiz.status}</Table.Cell>
                <Table.Cell>{quiz.users.length}</Table.Cell>
                <Table.Cell>
                  <Link href={`/account/admin/quiz/${quiz.id}`}>
                    <a>
                      <Button color="brown">Edit</Button>
                    </a>
                  </Link>
                </Table.Cell>
                <Table.Cell>
                  <Button color="red" onClick={() => deleteHandler(quiz.id)}>
                    Delete
                  </Button>
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
      <Link href={'/account/admin/createNewQuiz'}>
        <a>
          <Button>Create New Quiz</Button>
        </a>
      </Link>
    </div>
  );
};

export default Dashboard;

export async function getServerSideProps() {
  const quizes = await axios.get(`${BACKEND_URL}/quiz`);
  return {
    props: {
      quizes: quizes.data,
    },
  };
}
