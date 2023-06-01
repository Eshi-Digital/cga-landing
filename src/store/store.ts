import { configureStore, combineReducers } from "@reduxjs/toolkit";
import logger from "redux-logger";

import thunk from "redux-thunk";

import eventSlice from "./features/event/event.slice";

const store = configureStore({
  reducer: combineReducers({
    [eventSlice.name]: eventSlice.reducer,
  }),
  middleware: [thunk, logger],
});

export default store;
