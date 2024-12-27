import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setLightMode, setDarkMode } from "../redux/themeSlice";
function Theme() {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.theme.mode);
  return (
    <div>
      <div
        className={`min-h-screen flex flex-col items-center justify-center ${
          mode === "light" ? "bg-white text-black" : "bg-gray-900 text-white"
        } transition-colors duration-300`}
      >
        <h1 className="text-4xl font-bold mb-6">
          {mode === "light" ? "light mode" : "dark mode"}
        </h1>
        <h3>hello world</h3>
        <div className="flex space-x-4">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={() => dispatch(setLightMode())}
          >
            light mode
          </button>
          <button
            className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-800"
            onClick={() => dispatch(setDarkMode())}
          >
            dark mode
          </button>
        </div>
      </div>
    </div>
  );
}

export default Theme;
