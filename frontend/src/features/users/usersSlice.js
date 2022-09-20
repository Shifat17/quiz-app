import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { useRouter } from 'next/router';
import axios from 'axios';

const initialState = {
  user: [],
  status: 'loading',
  users: [],
};
const POSTS_URL = process.env.NEXT_PUBLIC_BACKEND_API;

export const registerUser = createAsyncThunk(
  'users/registerUser',
  async ({ username, email, password, password_confirmation }) => {
    const postdata = {
      username,
      email,
      password,
      password_confirmation,
    };
    console.log(username, email, password);
    const response = await axios.post(`${POSTS_URL}/users/register`, postdata, {
      headers: {
        'Access-Control-Allow-Credentials': true,
        'Content-Type': 'application/json',
        withCredentials: true,
      },
    });
    return response.data;
  }
);

export const getUser = createAsyncThunk('users/getUser', async () => {
  const response = await axios.get(`${POSTS_URL}/user`, {
    withCredentials: true,
  });
  return response.data;
});

export const logInUser = createAsyncThunk(
  'users/login',
  async ({ email, password }) => {
    const postdata = {
      email,
      password,
    };
    const response = await axios.post(`${POSTS_URL}/users/login`, postdata, {
      withCredentials: true,
    });
    return response.data;
  }
);

export const getAllUsers = createAsyncThunk('users/getAllUsers', async () => {
  const response = await axios.get(`${POSTS_URL}/users/getallusers`);
  return response.data;
});

export const updateUser = createAsyncThunk(
  'users/updateUser',
  async ({ id, username, email, is_admin, paid }) => {
    const updateData = {
      id,
      username,
      email,
      is_admin,
      paid,
    };
    const response = await axios.put(
      `${POSTS_URL}/users/updateusers/${id}`,
      updateData,
      {
        headers: {
          'Access-Control-Allow-Credentials': true,
          'Content-Type': 'application/json',
        },
      }
    );
    return response.data;
  }
);

export const deleteUser = createAsyncThunk(
  'users/deleteUser',
  async ({ id }) => {
    return await axios.delete(`${POSTS_URL}/users/deleteuser/${id}`);
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(registerUser.fulfilled, (state, action) => {
      console.log(action.payload);
      state.user.push(action.payload);
    });
    builder.addCase(getAllUsers.fulfilled, (state, action) => {
      state.users.push(action.payload);
    });
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.user.push(action.payload);
      state.status = 'succeed';
    });
    builder.addCase(updateUser.fulfilled, (state, action) => {
      state.user.push(action.payload);
    });
    builder.addCase(logInUser.fulfilled, (state, action) => {
      state.user.push(action.payload);
    });
  },
});

export default userSlice.reducer;
