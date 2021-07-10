import React from "react";
import { useSelector } from "react-redux";

const ViewUsers = () => {
  const users = useSelector((state) => state.users);

  return (
    <div>
      <div className="users-container">
        {users.map((el) => (
          <div className="user" key={el.id}>
            <div style={{ padding: "2px 16px", width: "100%" }}>
              <h4>
                <b>{el.name}</b>
              </h4>
              <p>{el.email}</p>
              <p>{el.phone}</p>
              <p>{el.website}</p>
            </div>
          </div>
        ))}
      </div>
      )}
    </div>
  );
};

export default ViewUsers;
