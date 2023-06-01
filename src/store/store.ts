import { configureStore, combineReducers } from "@reduxjs/toolkit";
import logger from "redux-logger";

import thunk from "redux-thunk";

import eventSlice from "./features/event/event.slice";
import newsSlice from "./features/news/news.slice";
import vacancySlice from "./features/vacancy/vacanct.slice";

const store = configureStore({
  reducer: combineReducers({
    [eventSlice.name]: eventSlice.reducer,
    [newsSlice.name]: newsSlice.reducer,
    [vacancySlice.name]: vacancySlice.reducer,
  }),
  middleware: [thunk, logger],
});

export default store;
