import { configureStore, combineReducers } from "@reduxjs/toolkit";

import thunk from "redux-thunk";
import logger from "redux-logger";

import eventSlice from "./features/event/event.slice";

export const store = configureStore({
  reducer: combineReducers({
    [eventSlice.name]: eventSlice.reducer,
  }),
  middleware: [thunk, logger],
});
