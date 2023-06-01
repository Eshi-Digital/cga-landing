import api from "@/utils/axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface IContactUs {
  sendContactUsLoading: boolean;
  sendContactUsSuccess: boolean;
  sendContactUsError: Error | null;
}

interface ContactUsForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const INITIAL_STATE: IContactUs = {
  sendContactUsLoading: false,
  sendContactUsSuccess: false,
  sendContactUsError: null,
};

export const sendContactUsAsync = createAsyncThunk(
  "contactUs/sendContactUs",
  async (contactUsForm: ContactUsForm, { rejectWithValue }) => {
    try {
      const response = await api.post("/contacts", contactUsForm);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

const contactUsSlice = createSlice({
  name: "contactUs",
  initialState: INITIAL_STATE,
  reducers: {
    clearSendContactUs: (state: any) => {
      state.sendContactUsLoading = false;
      state.sendContactUsSuccess = false;
      state.sendContactUsError = null;
    },
  },
  extraReducers: (builder: any) => {
    builder
      .addCase(sendContactUsAsync.pending, (state: any) => {
        state.sendContactUsLoading = true;
      })
      .addCase(sendContactUsAsync.fulfilled, (state: any) => {
        state.sendContactUsLoading = false;
        state.sendContactUsSuccess = true;
      })
      .addCase(sendContactUsAsync.rejected, (state: any, action: any) => {
        console.log(action);
        state.sendContactUsLoading = false;
        state.sendContactUsError = action.payload as Error;
      });
  },
});

export const { clearSendContactUs } = contactUsSlice.actions;
export default contactUsSlice;
