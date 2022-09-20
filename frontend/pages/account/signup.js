import { Button, Form, Message } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { registerUser } from '../../src/features/users/usersSlice';
import Layout from '../../components/Layout';
import { useState } from 'react';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [confirmpassword, setConfirmpassword] = useState('');
  const router = useRouter();
  const dispatch = useDispatch();

  const submitHandler = () => {
    console.log(username, email, password);
    if (password == confirmpassword) {
      dispatch(
        registerUser({
          username,
          email,
          password,
          password_confirmation: confirmpassword,
        })
      );
      router.push('/account/users/dashboard');
    } else {
      console.log("password didn't match");
    }
  };

  return (
    <Layout header="Sign up to get started">
      <Form.Input
        fluid
        icon="user"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        iconPosition="left"
        placeholder="your name"
        className="auth-input-field"
      />
      <Form.Input
        fluid
        icon="user"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        iconPosition="left"
        placeholder="E-mail address"
        className="auth-input-field"
      />
      <Form.Input
        fluid
        icon="lock"
        iconPosition="left"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        type="password"
        className="auth-input-field"
      />
      <Form.Input
        fluid
        type="password"
        value={confirmpassword}
        onChange={(e) => setConfirmpassword(e.target.value)}
        icon="lock"
        iconPosition="left"
        placeholder="Confirm Password"
        type="password"
        className="auth-input-field"
      />

      <Button color="blue" fluid size="huge" onClick={submitHandler}>
        Sign up
      </Button>

      <Message size="big">
        <Link href={'/account/login'}>Already Registered?</Link>
      </Message>
    </Layout>
  );
};

export default Signup;
