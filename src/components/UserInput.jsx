import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, updateUser } from "../redux/userSlice";

const UserInput = ({ editMode = false, editingUser, setEditMode }) => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState(
    editingUser || { id: Date.now(), name: "", email: "" }
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editMode) {
      dispatch(updateUser(formData));
      setEditMode(false);
    } else {
      dispatch(addUser(formData));
    }
    setFormData({ id: Date.now(), name: "", email: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="border p-3 mb-5 mx-auto shadow-xl"
        type="text"
        placeholder="Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        required
      />
      <input
        className="border p-3 mb-5 mx-auto shadow-xl mr-5"
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        required
      />
      <button type="submit" className="bg-green-600 text-white p-2 rounded-md">{editMode ? "Update" : "Add"} User</button>
    </form>
  );
};

export default UserInput;
