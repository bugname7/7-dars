import { createSlice } from "@reduxjs/toolkit";

const colorTestSlice = createSlice({
  name: "colorTest",
  initialState: { selectedColor: "#ffffff" },
  reducers: {
    changeColor: (state, action) => {
      state.selectedColor = action.payload;
    },
  },
});

export const { changeColor } = colorTestSlice.actions;
export default colorTestSlice.reducer;
