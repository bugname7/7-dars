import React from "react";
import { useSelector } from "react-redux";

const UserDisplay = () => {
  const selectedColor = useSelector((state) => state.usercolor.selectedColor);

  return (
    <div className="bg-blue-100 text-center">
      <p>tanlagan rangiz</p>
      <div
        className="text-center ml-[350px]"
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: selectedColor,
          border: "1px solid #000",
        }}
      ></div>
    </div>
  );
};

export default UserDisplay;
