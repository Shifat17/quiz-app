import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getUser } from '../src/features/users/usersSlice';
const POSTS_URL = process.env.NEXT_PUBLIC_BACKEND_API;
import axios from 'axios';
import Quizzes from '@/components/Quizzes';
import { Button } from 'semantic-ui-react';

export async function getServerSideProps({ req }) {
  const response = await axios.get(`${POSTS_URL}/quiz`);
  return {
    props: {
      quizes: response.data,
    },
  };
}

export default function Home({ quizes }) {
  const users = useSelector((state) => state.users);
  const user = users.user[0];
  console.log('user', user);
  console.log(quizes);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
  }, [user]);
  return (
    <div>
      {users.status == 'loading' ? (
        <div>Loading....</div>
      ) : Object.keys(user).length == 0 ? (
        <div style={{ margin: '5rem' }}>
          Don't hava an account ?
          <Link href={'/account/signup'}>
            <a>Signup</a>
          </Link>
          Have an account ?
          <Link href={'/account/login'}>
            <a>login</a>
          </Link>
        </div>
      ) : (
        <div style={{ margin: '5rem' }}>
          <Button>
            <Link href={'/account/users/dashboard'}>
              <a>User Dashboard</a>
            </Link>
          </Button>
          <Quizzes quizes={quizes} />
        </div>
      )}
    </div>
  );
}
