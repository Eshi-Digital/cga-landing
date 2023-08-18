import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "@/utils/axios";

interface IEvent {
  fetchEventsLoading: boolean;
  fetchEventsSuccess: boolean;
  fetchEventsError: Error | null;
  fetchResearchesLoading: boolean;
  fetchResearchesSuccess: boolean;
  fetchResearchesError: Error | null;
  createResearchLoading: boolean;
  createResearchSuccess: boolean;
  createResearchError: Error | null;

  researches: any[];
  events: any[];
}

const INITIAL_STATE: IEvent = {
  fetchEventsLoading: false,
  fetchEventsSuccess: false,
  fetchEventsError: null,
  fetchResearchesLoading: false,
  fetchResearchesSuccess: false,
  fetchResearchesError: null,
  createResearchLoading: false,
  createResearchSuccess: false,
  createResearchError: null,

  researches: [],
  events: [],
};

export const fetchEventsAsync = createAsyncThunk(
  "event/fetchEvents",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("/events");
      return response;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchResearchesAsync = createAsyncThunk(
  "event/fetchResearches",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("/researches?approved=true");
      return response;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const createResearchAsync = createAsyncThunk(
  "event/createResearch",
  async (data: any, { rejectWithValue }) => {
    try {
      const response = await api.post("/researches", data);
      return response;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

const eventSlice = createSlice({
  name: "event",
  initialState: INITIAL_STATE,
  reducers: {
    clearCreateResearch: (state) => {
      state.createResearchLoading = false;
      state.createResearchSuccess = false;
      state.createResearchError = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchEventsAsync.pending, (state) => {
        state.fetchEventsLoading = true;
      })
      .addCase(fetchEventsAsync.fulfilled, (state, action) => {
        const {
          data: { events },
        } = action.payload;
        state.fetchEventsLoading = false;
        state.fetchEventsSuccess = true;
        state.events = events;
      })
      .addCase(fetchEventsAsync.rejected, (state, action) => {
        state.fetchEventsLoading = false;
        state.fetchEventsError = action.payload as Error;
      })
      .addCase(fetchResearchesAsync.pending, (state) => {
        state.fetchResearchesLoading = true;
      })
      .addCase(fetchResearchesAsync.fulfilled, (state, action) => {
        const {
          data: { researches },
        } = action.payload;
        state.fetchResearchesLoading = false;
        state.fetchResearchesSuccess = true;
        state.researches = researches;
      })
      .addCase(fetchResearchesAsync.rejected, (state, action) => {
        state.fetchResearchesLoading = false;
        state.fetchResearchesError = action.payload as Error;
      })
      .addCase(createResearchAsync.pending, (state) => {
        state.createResearchLoading = true;
      })
      .addCase(createResearchAsync.fulfilled, (state, action) => {
        state.createResearchLoading = false;
        state.createResearchSuccess = true;
      })
      .addCase(createResearchAsync.rejected, (state, action) => {
        state.createResearchLoading = false;
        state.createResearchError = action.payload as Error;
      });
  },
});

export default eventSlice;
