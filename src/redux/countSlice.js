import { createSlice } from "@reduxjs/toolkit";

function getColor() {
  const colors = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += colors[Math.floor(Math.random() * 16)];
  }
  return color;
}

const initialState = {
  color: "#FFFFFF",
};

const colorSlice = createSlice({
  name: "color",
  initialState,
  reducers: {
    setRandomColor: (state) => {
      state.color = getColor();
    },
  },
});

export default colorSlice.reducer;
export const { setRandomColor } = colorSlice.actions;
