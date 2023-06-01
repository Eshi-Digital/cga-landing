import { configureStore, combineReducers } from "@reduxjs/toolkit";
import logger from "redux-logger";

import thunk from "redux-thunk";

import eventSlice from "./features/event/event.slice";
<<<<<<< HEAD
import newsSlice from "./features/news/news.slice";
import vacancySlice from "./features/vacancy/vacanct.slice";
=======
import contactUsSlice from "./features/contact-us/contact-us.slice";
>>>>>>> 6bd05d0b83af6ff903b0efcb8d047948b59cbcee

const store = configureStore({
  reducer: combineReducers({
    [contactUsSlice.name]: contactUsSlice.reducer,
    [eventSlice.name]: eventSlice.reducer,
    [newsSlice.name]: newsSlice.reducer,
    [vacancySlice.name]: vacancySlice.reducer,
  }),
  middleware: [thunk, logger],
});

export default store;
