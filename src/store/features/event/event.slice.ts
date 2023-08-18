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
  fetchGalleryLoading: boolean;
  fetchGallerySuccess: boolean;
  fetchGalleryError: Error | null;
  fetchAdLoading: boolean;
  fetchAdSuccess: boolean;
  fetchAdError: Error | null;

  ad: any[];
  gallery: any[];
  code: string | null;
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
  fetchGalleryLoading: false,
  fetchGallerySuccess: false,
  fetchGalleryError: null,
  fetchAdLoading: false,
  fetchAdSuccess: false,
  fetchAdError: null,

  ad: [],
  gallery: [],
  code: null,
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
      const response = await api.post("/researches", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchGalleryAsync = createAsyncThunk(
  "event/fetchGallery",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("/gallery");
      return response;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchAdAsync = createAsyncThunk(
  "event/fetchAd",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("/advertisements");
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
        const {
          data: { research },
        } = action.payload;
        state.code = research.code;
        state.createResearchLoading = false;
        state.createResearchSuccess = true;
      })
      .addCase(createResearchAsync.rejected, (state, action) => {
        state.createResearchLoading = false;
        state.createResearchError = action.payload as Error;
      })
      .addCase(fetchGalleryAsync.pending, (state) => {
        state.fetchGalleryLoading = true;
      })
      .addCase(fetchGalleryAsync.fulfilled, (state, action) => {
        const {
          data: { gallery },
        } = action.payload;
        state.fetchGalleryLoading = false;
        state.fetchGallerySuccess = true;
        state.gallery = gallery;
      })
      .addCase(fetchGalleryAsync.rejected, (state, action) => {
        state.fetchGalleryLoading = false;
        state.fetchGalleryError = action.payload as Error;
      })
      .addCase(fetchAdAsync.pending, (state) => {
        state.fetchAdLoading = true;
      })
      .addCase(fetchAdAsync.fulfilled, (state, action) => {
        const {
          data: { ad },
        } = action.payload;
        state.fetchAdLoading = false;
        state.fetchAdSuccess = true;
        state.ad = ad;
      })
      .addCase(fetchAdAsync.rejected, (state, action) => {
        state.fetchAdLoading = false;
        state.fetchAdError = action.payload as Error;
      });
  },
});

export const { clearCreateResearch } = eventSlice.actions;

export default eventSlice;
