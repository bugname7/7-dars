import { configureStore } from "@reduxjs/toolkit";
import colorReducer from "./countSlice";
import themeReducer from "./themeSlice";
export const store = configureStore({
  reducer: {
    color: colorReducer,
    theme: themeReducer,
  },
});
