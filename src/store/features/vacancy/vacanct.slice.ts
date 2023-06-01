import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../../utils/axios";

interface IVacancy {
  fetchVacanciesLoading: boolean;
  fetchVacanciesSuccess: boolean;
  fetchVacanciesError: Error | null;
  vacancies: any[];
}

const INITIAL_STATE: IVacancy = {
  fetchVacanciesLoading: false,
  fetchVacanciesSuccess: false,
  fetchVacanciesError: null,

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

const vacancySlice = createSlice({
  name: "vacancy",
  initialState: INITIAL_STATE,
  reducers: {},
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
      });
  },
});

export default vacancySlice;
