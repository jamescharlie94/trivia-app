import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  error: false,
  questions: [],
  results: [],
};

const slice = createSlice({
  name: "album",
  initialState,
  reducers: {
    // START LOADING
    startLoading(state) {
      state.isLoading = true;
    },

    // HAS ERROR
    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    // GET Questions Success
    getQuizSuccess(state, action) {
      state.isLoading = false;
      state.questions = action.payload.results;
    },
  },
});

// Reducer
export default slice.reducer;

// ----------------------------------------------------------------------

export function getQuiz(amount: number, difficulty: string) {
  return async (dispatch: any) => {
    try {
      dispatch(slice.actions.startLoading());
      const result = await axios.request({
        url: "https://opentdb.com/api.php",
        params: {
          amount,
          difficulty,
          type: "boolean",
        },
      });
      dispatch(slice.actions.getQuizSuccess(result.data));
    } catch (error) {
      dispatch(slice.actions.hasError((error as Error).message));
    }
  };
}
