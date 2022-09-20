import { Header, Table, Rating } from 'semantic-ui-react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'semantic-ui-react';
import { useEffect } from 'react';
import Link from 'next/link';
import axios from 'axios';
import { getAllUsers } from '../../../../src/features/users/usersSlice';
import { deleteUser } from 'src/features/users/usersSlice';
const POSTS_URL = process.env.NEXT_PUBLIC_BACKEND_API;
export async function getServerSideProps(context) {
  const response = await axios.get(`${POSTS_URL}/users/getallusers`);
  return {
    props: {
      users: response.data,
    },
  };
}

const userlist = ({ users }) => {
  const dispatch = useDispatch();
  const storeUsers = useSelector((state) => state.users.users);
  console.log(users);
  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  const deleteHandler = (id) => {
    dispatch(deleteUser({ id }));
  };
  return (
    <div style={{ margin: '5rem' }}>
      <Table celled padded>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>username</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
            <Table.HeaderCell>admin status</Table.HeaderCell>
            <Table.HeaderCell>paid-status</Table.HeaderCell>
            <Table.HeaderCell>edit</Table.HeaderCell>
            <Table.HeaderCell>delete</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {users.map((user) => {
            return (
              <Table.Row key={user.id}>
                <Table.Cell>{user.username}</Table.Cell>
                <Table.Cell>{user.email}</Table.Cell>
                <Table.Cell>
                  {user.is_admin == 0 ? 'admin' : 'Not admin'}
                </Table.Cell>
                <Table.Cell>
                  {user.paid == 0 ? 'paid-user' : 'Not-paid user'}
                </Table.Cell>
                <Table.Cell>
                  <Link href={`/account/admin/users/edit/${user.id}`}>
                    <a>
                      <Button color="brown">Edit</Button>
                    </a>
                  </Link>
                </Table.Cell>
                <Table.Cell>
                  <Button color="red" onClick={() => deleteHandler(user.id)}>
                    Delete
                  </Button>
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
};

export default userlist;
