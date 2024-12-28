import { configureStore } from "@reduxjs/toolkit";
import colorReducer from "./countSlice";
import themeReducer from "./themeSlice";
import wordReducer from "../redux/wordSlice";
import colorTestReducer from "../redux/colorTestSlice";
import usercolorReducer from "./usercolor";
import userReducer from "../redux/userSlice";

export const store = configureStore({
  reducer: {
    color: colorReducer,
    usercolor: usercolorReducer,
    theme: themeReducer,
    word: wordReducer,
    user: userReducer,
    colorTest: colorTestReducer,
  },
});
