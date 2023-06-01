import { configureStore, combineReducers } from "@reduxjs/toolkit";
import logger from "redux-logger";

import thunk from "redux-thunk";

import eventSlice from "./features/event/event.slice";
import contactUsSlice from "./features/contact-us/contact-us.slice";

const store = configureStore({
  reducer: combineReducers({
    [contactUsSlice.name]: contactUsSlice.reducer,
    [eventSlice.name]: eventSlice.reducer,
  }),
  middleware: [thunk, logger],
});

export default store;
