import React, { useState } from "react";
import fakeData from "../../fakeData/users.js";
import "./Users.css";
import Person from "../Person/Person.js";
import Request from "../Request/Request";

const Users = () => {
  const [users, setUsers] = useState(fakeData);

  const [request, setRequest] = useState([]);

  const addUser = person => {
    const ind = request.indexOf(person);
    if (ind < 0) {
      const newArray = [...request, person];
      setRequest(newArray);
    } else {
      alert("You are already added this user");
    }
  };

  return (
    <div className="users-container">
      <div className="user-list-area">
        {users.map(user => (
          <Person addUser={addUser} person={user}></Person>
        ))}
      </div>
      <div className="add-user-cart">
        <Request request={request}></Request>
      </div>
    </div>
  );
};

export default Users;
