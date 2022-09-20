import { Button, Checkbox, Form } from 'semantic-ui-react';
import { updateUser } from '../../../../../src/features/users/usersSlice';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { useState } from 'react';
const POSTS_URL = process.env.NEXT_PUBLIC_BACKEND_API;
export async function getServerSideProps(context) {
  const response = await axios.get(`${POSTS_URL}/users/${context.query.id}`);
  const userdata = response.data[0];
  console.log(userdata);
  if (userdata.is_admin == 0) {
    userdata.is_admin = false;
  }
  if (userdata.is_admin == 1) {
    userdata.is_admin = true;
  }

  if (userdata.paid == 0) {
    userdata.paid = false;
  }

  return {
    props: {
      user: userdata,
    },
  };
}

const User = ({ user }) => {
  console.log(user);
  const [username, setuserName] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  const [isAdmin, setIsAdmin] = useState(user.is_admin);
  const [paid, setPaid] = useState(user.paid);
  const dispatch = useDispatch();

  const updateHandler = () => {
    console.log(isAdmin, paid);
    dispatch(
      updateUser({ id: user.id, username, email, is_admin: isAdmin, paid })
    );
  };

  return (
    <div style={{ margin: '5rem' }}>
      <h2>Edit User</h2>
      <Form>
        <Form.Field>
          <label>username</label>
          <input
            placeholder="username"
            value={username}
            type="text"
            onChange={(e) => setuserName(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>email</label>
          <input
            placeholder="email"
            value={email}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            type="checkbox"
            label="Is Admin"
            checked={isAdmin}
            onChange={(e) => setIsAdmin(!isAdmin)}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            type="checkbox"
            label="Paid"
            checked={paid}
            onChange={(e) => setPaid(!paid)}
          />
        </Form.Field>
        <Button color="olive" type="submit" onClick={updateHandler}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default User;
