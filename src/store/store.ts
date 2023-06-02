import { configureStore, combineReducers } from "@reduxjs/toolkit";
import logger from "redux-logger";

import thunk from "redux-thunk";

import eventSlice from "./features/event/event.slice";
import newsSlice from "./features/news/news.slice";
import contactUsSlice from "./features/contact-us/contact-us.slice";
import vacancySlice from "./features/vacancy/vacanct.slice";
import membershipSlice from "./features/membership/membership.slice";

const store = configureStore({
  reducer: combineReducers({
    [contactUsSlice.name]: contactUsSlice.reducer,
    [eventSlice.name]: eventSlice.reducer,
    [membershipSlice.name]: membershipSlice.reducer,
    [newsSlice.name]: newsSlice.reducer,
    [vacancySlice.name]: vacancySlice.reducer,
  }),
  middleware: [thunk, logger],
});

export default store;
