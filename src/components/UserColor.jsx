import React from "react";
import { useDispatch } from "react-redux";
import { setColor } from "../redux/usercolor";

const UserColor = () => {
  const dispatch = useDispatch();

  const handleColorChange = (event) => {
    dispatch(setColor(event.target.value));
  };

  return (
    <div className="bg-blue-100 text-center">
      <label htmlFor="userColor">rang tanlang </label>
      <input type="color" id="userColor" onChange={handleColorChange} />
    </div>
  );
};

export default UserColor;
