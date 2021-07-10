import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateUser } from "../redux/actions";

const UpdateUser = () => {
  const [data, setData] = useState({
    id: "",
    name: "",
    email: "",
    phone: "",
    website: "",
  });

  const dispatch = useDispatch();
  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };
  return (
    <div className="form">
      <input
        type="text"
        value={data.id}
        name="id"
        placeholder="id"
        onChange={handleChange}
      />
      <input
        type="text"
        value={data.name}
        name="name"
        placeholder="name"
        onChange={handleChange}
      />
      <input
        type="text"
        value={data.email}
        name="email"
        placeholder="email"
        onChange={handleChange}
      />
      <input
        type="text"
        value={data.phone}
        name="phone"
        placeholder="phone"
        onChange={handleChange}
      />
      <input
        type="text"
        value={data.website}
        name="website"
        placeholder="website"
        onChange={handleChange}
      />
      <button
        onClick={() => {
          const newUser = { ...data, id: parseInt(data.id) };
          dispatch(updateUser(newUser));
        }}
      >
        create
      </button>
    </div>
  );
};

export default UpdateUser;
