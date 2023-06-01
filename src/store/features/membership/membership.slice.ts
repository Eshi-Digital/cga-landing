import api from "@/utils/axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface IMembership {
  createMembershipLoading: boolean;
  createMembershipSuccess: boolean;
  createMembershipError: Error | null;
}

interface MembershipForm {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const INITIAL_STATE: IMembership = {
  createMembershipLoading: false,
  createMembershipSuccess: false,
  createMembershipError: null,
};

export const createMembershipAsync = createAsyncThunk(
  "membership/createMembership",
  async (membershipForm: MembershipForm, { rejectWithValue }) => {
    try {
      const response = await api.post("/memberships", membershipForm);
      return response;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

const membershipSlice = createSlice({
  name: "membership",
  initialState: INITIAL_STATE,
  reducers: {
    clearCreateMembership: (state: any) => {
      state.createMembershipLoading = false;
      state.createMembershipSuccess = false;
      state.createMembershipError = null;
    },
  },
  extraReducers: (builder: any) => {
    builder
      .addCase(createMembershipAsync.pending, (state: any) => {
        state.createMembershipLoading = true;
      })
      .addCase(createMembershipAsync.fulfilled, (state: any) => {
        state.createMembershipLoading = false;
        state.createMembershipSuccess = true;
      })
      .addCase(createMembershipAsync.rejected, (state: any, action: any) => {
        state.createMembershipLoading = false;
        state.createMembershipError = action.payload as Error;
      });
  },
});

export const { clearCreateMembership } = membershipSlice.actions;
export default membershipSlice;
