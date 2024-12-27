import { createSlice } from "@reduxjs/toolkit";

const wordSlice = createSlice({
  name: "text",
  initialState: {
    content: "dastlabki matn",
  },
  reducers: {
    changeText: (state, action) => {
      state.content = action.payload;
    },
  },
});

export const { changeText } = wordSlice.actions;
export default wordSlice.reducer;
