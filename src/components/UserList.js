/* UserList.js code from the provided example */
// components/UserList.js
import React, { useState } from "react";
import "./styles/UserList.css";

const UserList = ({ users, selectUser }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  const filteredUsers = users
    .filter(
      (user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      if (sortOrder === "asc") return nameA.localeCompare(nameB);
      return nameB.localeCompare(nameA);
    });

  return (
    <div className="user-list">
      <input
        type="text"
        placeholder="Search by name or email"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}>Sort</button>
      <ul>
        {filteredUsers.map((user) => (
          <li key={user.id} onClick={() => selectUser(user)}>
            <span>{user.name}</span>
            <span>{user.email}</span>
            <span>{user.goals.length} goals</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;