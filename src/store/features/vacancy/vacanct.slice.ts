import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../../utils/axios";

interface IVacancy {
  fetchVacanciesLoading: boolean;
  fetchVacanciesSuccess: boolean;
  fetchVacanciesError: Error | null;
  vacancies: any[];
  applyVacancyLoading: boolean;
  applyVacancySuccess: boolean;
  applyVacancyError: Error | null;
}

const INITIAL_STATE: IVacancy = {
  fetchVacanciesLoading: false,
  fetchVacanciesSuccess: false,
  fetchVacanciesError: null,
  applyVacancyLoading: false,
  applyVacancySuccess: false,
  applyVacancyError: null,

  vacancies: [],
};

export const fetchVacanciesAsync = createAsyncThunk(
  "vacancy/fetchVacanciesAsync",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("/vacancies");
      return response;
    } catch (error: any) {
      return rejectWithValue({ error: error.message });
    }
  }
);

export const applyVacancyAsync = createAsyncThunk(
  "vacancy/applyVacancyAsync",
  async (vacancyForm: FormData, { rejectWithValue }) => {
    try {
      const response = await api.post(`/applicants`, vacancyForm);
      return response;
    } catch (error: any) {
      return rejectWithValue({ error: error.message });
    }
  }
);

const vacancySlice = createSlice({
  name: "vacancy",
  initialState: INITIAL_STATE,
  reducers: {
    clearApplyVacancy: (state) => {
      state.applyVacancyLoading = false;
      state.applyVacancySuccess = false;
      state.applyVacancyError = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchVacanciesAsync.pending, (state, action) => {
        state.fetchVacanciesLoading = true;
      })
      .addCase(fetchVacanciesAsync.fulfilled, (state, action) => {
        const {
          data: { vacancies },
        } = action.payload;
        state.fetchVacanciesLoading = false;
        state.fetchVacanciesSuccess = true;
        state.vacancies = vacancies;
      })
      .addCase(fetchVacanciesAsync.rejected, (state, action) => {
        state.fetchVacanciesLoading = false;
        state.fetchVacanciesError = action.payload as Error;
      })
      .addCase(applyVacancyAsync.pending, (state, action) => {
        state.applyVacancyLoading = true;
      })
      .addCase(applyVacancyAsync.fulfilled, (state, action) => {
        state.applyVacancyLoading = false;
        state.applyVacancySuccess = true;
      })
      .addCase(applyVacancyAsync.rejected, (state, action) => {
        state.applyVacancyLoading = false;
        state.applyVacancyError = action.payload as Error;
      });
  },
});

export const { clearApplyVacancy } = vacancySlice.actions;

export default vacancySlice;
