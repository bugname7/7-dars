import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteUser } from "../redux/userSlice";
import UserInput from "./UserInput";

const UserList = () => {
  const users = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [editMode, setEditMode] = useState(false);
  const [editingUser, setEditingUser] = useState(null);

  const handleEdit = (user) => {
    setEditingUser(user);
    setEditMode(true);
  };

  return (
    <div>
      {editMode ? (
        <UserInput
          editMode={editMode}
          editingUser={editingUser}
          setEditMode={setEditMode}
        />
      ) : (
        <UserInput />
      )}
      <h2>Users List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <p>
              {user.name} - {user.email}
            </p>
            <button
              onClick={() => handleEdit(user)}
              className="bg-blue-500 text-white p-2 rounded-md"
            >
              Edit
            </button>
            <button
              onClick={() => dispatch(deleteUser(user.id))}
              className="bg-red-500 ml-5 text-white p-2 rounded-md"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
