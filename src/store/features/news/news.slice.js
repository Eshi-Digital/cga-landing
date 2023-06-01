import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../../utils/axios";

const INITIAL_STATE = {
  fetchNewsLoading: true,
  fetchNewsSuccess: false,
  fetchNewsError: null,

  news: [],
};

export const fetchNewsAsync = createAsyncThunk(
  "news/fetchNewsAsync",
  async (payload, { rejectWithValue }) => {
    try {
      const response = api.get("/news");
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const newsSlice = createSlice({
  name: "news",
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNewsAsync.pending, (state, action) => {
        state.fetchNewsLoading = true;
      })
      .addCase(fetchNewsAsync.fulfilled, (state, action) => {
        const {
          data: { news },
        } = action.payload;
        state.fetchNewsLoading = false;
        state.fetchNewsSuccess = true;
        state.news = news;
      })
      .addCase(fetchNewsAsync.rejected, (state, action) => {
        state.fetchNewsLoading = false;
        state.fetchNewsError = action.payload;
      });
  },
});

export default newsSlice;
