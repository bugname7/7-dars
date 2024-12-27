import { configureStore } from "@reduxjs/toolkit";
import colorReducer from "./countSlice";

export const store = configureStore({
  reducer: {
    color: colorReducer,
  },
});
