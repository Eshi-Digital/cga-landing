import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../../utils/axios";

const INITIAL_STATE = {
  fetchEventsLoading: false,
  fetchEventsSuccess: false,
  fetchEventsError: null,

  events: [],
};

export const fetchEventsAsync = createAsyncThunk(
  "event/fetchEvents",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("/events");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const eventSlice = createSlice({
  name: "event",
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEventsAsync.pending, (state) => {
        state.fetchEventsLoading = true;
      })
      .addCase(fetchEventsAsync.fulfilled, (state, action) => {
        const { events } = action.payload;
        state.fetchEventsLoading = false;
        state.fetchEventsSuccess = true;
        state.events = events;
      })
      .addCase(fetchEventsAsync.rejected, (state, action) => {
        state.fetchEventsLoading = false;
        state.fetchEventsError = action.payload;
      });
  },
});

export default eventSlice;
