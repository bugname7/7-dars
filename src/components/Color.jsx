import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { setRandomColor } from "../redux/countSlice";

function Color() {
  const dispatch = useDispatch();
  const currentColor = useSelector((state) => state.color.color);
  const handleSave = () => {
    dispatch(setRandomColor());
  };

  return (
    <div>
      <div
        style={{
          backgroundColor: currentColor,
          height: "20vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button
          onClick={handleSave}
          className="bg-black text-white p-3 rounded-xl"
        >
          shu yerni bosing
        </button>
      </div>
    </div>
  );
}

export default Color;
