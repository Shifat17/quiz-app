import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  quizes: [],
  quiz: [],
  questions: [],
  scores: {},
};
const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_API;

export const addNewQuiz = createAsyncThunk('admin/addQuiz', async (form) => {
  const response = await axios.post(`${BACKEND_URL}/quiz`, form);
  return response.data;
});

export const addNewQuestion = createAsyncThunk(
  'admin/addQuestion',
  async ({ id, question, options, answers }) => {
    const data = {
      id,
      question,
      options,
      answers,
    };
    const response = await axios.post(
      `${BACKEND_URL}/quiz/${id}/questions`,
      data
    );
    return response.data;
  }
);

export const updateQuiz = createAsyncThunk(
  'quizzes/updatequestions',
  async (form) => {
    console.log('updatequiz called');
    const response = await axios.put(`${BACKEND_URL}/quizes/updateQuiz`, form);
    return response.data;
  }
);

export const deleteQuiz = createAsyncThunk(
  'quizzes/deleteQuiz',
  async ({ id }) => {
    return await axios.delete(`${BACKEND_URL}/quizes/deleteQuiz/${id}`);
  }
);

export const getQuestions = createAsyncThunk(
  'quizzes/questions',
  async ({ quizid, userId }) => {
    const response = await axios.get(
      `${BACKEND_URL}/questions/${quizid}/${userId}`
    );
    return response.data;
  }
);

export const getQuiz = createAsyncThunk('quizzez/quiz', async ({ quizid }) => {
  const response = await axios.get(`${BACKEND_URL}/quiz/${quizid}`);
  return response.data;
});

const quizesSlice = createSlice({
  name: 'quizes',
  initialState,
  reducers: {
    answerChanged: {
      reducer(state, action) {
        const { value, index, qindex } = action.payload;
        state.questions[0][qindex].options[index].checked = value;
      },
    },
    deleteChecked: {
      reducer(state, action) {
        state.questions[0].forEach((question) => {
          question.options.forEach((option) => {
            option.checked = false;
          });
        });
      },
    },
  },
  extraReducers(builder) {
    builder.addCase(addNewQuiz.fulfilled, (state, action) => {
      state.quizes.push(action.payload);
    });
    builder.addCase(addNewQuestion.fulfilled, (state, action) => {
      console.log(action.payload);
    });
    builder.addCase(getQuestions.fulfilled, (state, action) => {
      console.log(action.payload);
      const modifiedquestions = action.payload.map((question) => {
        const newOptions = question.options.map((option) => {
          const newOption = {};
          newOption.title = option;
          newOption.checked = false;
          return newOption;
        });
        question.options = newOptions;
        return question;
      });
      state.questions.push(modifiedquestions);
    });
    builder.addCase(getQuiz.fulfilled, (state, action) => {
      state.quiz.push(action.payload);
    });
    builder.addCase(updateQuiz.fulfilled, (state, action) => {
      console.log(action.payload);
    });
  },
});

export const { answerChanged, deleteChecked } = quizesSlice.actions;

export default quizesSlice.reducer;
