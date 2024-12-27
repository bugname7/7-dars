import { configureStore } from "@reduxjs/toolkit";
import colorReducer from "./countSlice";
import themeReducer from "./themeSlice";
import wordReducer from "../redux/wordSlice";
export const store = configureStore({
  reducer: {
    color: colorReducer,
    theme: themeReducer,
    word: wordReducer,
  },
});
