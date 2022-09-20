const POSTS_URL = process.env.NEXT_PUBLIC_BACKEND_API;
import axios from 'axios';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUser } from '../../../src/features/users/usersSlice';
export async function getServerSideProps({ req }) {
  const response = await axios.get(`${POSTS_URL}/user`);

  return {
    props: {
      users: response.data,
    },
  };
}

const users = () => {
  const users = useSelector((state) => state.users);
  const user = users.user[0]?.user;
  console.log('user', user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
  }, [user]);
  return (
    <div>
      {users.status == 'loading' ? (
        <div>Loading...</div>
      ) : (
        <>
          <p>{user.username}</p>
          <p>User dashboard</p>
        </>
      )}
    </div>
  );
};

export default users;
