import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeText } from "../redux/wordSlice";

const Word = () => {
  const dispatch = useDispatch();
  const text = useSelector((state) => state.word.content);

  const handleTextChange = (newText) => {
    dispatch(changeText(newText));
  };

  return (
    <div className="text-center">
      <p className="text-lg font-medium mb-4">{text}</p>
      <div className="space-x-4">
        <button
          onClick={() => handleTextChange("bu birinchi matn")}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          birinchi soz
        </button>
        <button
          onClick={() => handleTextChange("bu ikkinchi matn")}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          ikkinchi soz
        </button>
        <button
          onClick={() => handleTextChange("bu uchinchi matn")}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          uchinchi soz
        </button>
      </div>
    </div>
  );
};

export default Word;
