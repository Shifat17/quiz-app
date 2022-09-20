import { configureStore } from '@reduxjs/toolkit';
import userReducer from 'src/features/users/usersSlice';
import quizesSlice from 'src/features/quizes/quizesSlice';
const store = configureStore({
  reducer: {
    users: userReducer,
    quizes: quizesSlice,
  },
});

export default store;
