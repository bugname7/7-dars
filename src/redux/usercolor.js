import { createSlice } from "@reduxjs/toolkit";

const usercolorSlice = createSlice({
  name: "color",
  initialState: {
    selectedColor: "#000000",
  },
  reducers: {
    setColor: (state, action) => {
      state.selectedColor = action.payload;
    },
  },
});

export const { setColor } = usercolorSlice.actions;

export default usercolorSlice.reducer;
