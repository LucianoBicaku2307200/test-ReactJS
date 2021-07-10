import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../redux/actions";
const CreateUser = () => {
  const [data, setData] = useState({
    id: "",
    name: "",
    email: "",
    phone: "",
    website: "",
  });
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  return (
    <div className="form">
      <input
        type="text"
        value={data ? data.name : ""}
        name="name"
        placeholder="name"
        onChange={handleChange}
      />
      <input
        type="text"
        value={data ? data.email : ""}
        name="email"
        placeholder="email"
        onChange={handleChange}
      />
      <input
        type="text"
        value={data ? data.phone : ""}
        name="phone"
        placeholder="phone"
        onChange={handleChange}
      />
      <input
        type="text"
        value={data ? data.website : ""}
        name="website"
        placeholder="website"
        onChange={handleChange}
      />
      <button
        onClick={() => {
          const newUser = { ...data, id: users.length + 1 };
          dispatch(createUser(newUser));
        }}
      >
        create
      </button>
    </div>
  );
};

export default CreateUser;
