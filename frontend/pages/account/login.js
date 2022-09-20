import { Button, Form, Message } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Layout from '../../components/Layout';
import { logInUser } from '../../src/features/users/usersSlice';
import { useState } from 'react';

const Login = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = () => {
    dispatch(logInUser({ email, password }));
    router.push('/');
  };

  return (
    <Layout header="Dashboard Log in">
      <Form.Input
        fluid
        icon="user"
        iconPosition="left"
        value={email}
        placeholder="E-mail address"
        onChange={(e) => setEmail(e.target.value)}
        className="auth-input-field"
      />
      <Form.Input
        fluid
        icon="lock"
        iconPosition="left"
        value={password}
        placeholder="Password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        className="auth-input-field"
      />

      <Button color="olive" fluid size="huge" onClick={submitHandler}>
        Login
      </Button>

      <Message size="big">
        <Link href={'/account/signup'}>Not Registered?</Link>
      </Message>
    </Layout>
  );
};

export default Login;
