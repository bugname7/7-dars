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
    <div className="text-center bg-blue-200">
      <p className="text-lg font-medium mb-4">{text}</p>
      <div className="space-x-4">
        {" "}
        <div className="container mx-auto p-4 bg-blue-200">
          <h1 className="text-2xl mb-6 text-center">tugmani bosing</h1>
        </div>
        <button
          onClick={() => handleTextChange("bu birinchi matn")}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          birinchi soz
        </button>
        <button
          onClick={() => handleTextChange("bu ikkinchi matn")}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          ikkinchi soz
        </button>
        <button
          onClick={() => handleTextChange("bu uchinchi matn")}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          uchinchi soz
        </button>
      </div>
    </div>
  );
};

export default Word;
