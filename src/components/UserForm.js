/* UserForm.js code from the provided example */
// components/UserForm.js
import React, { useState } from "react";
import "./styles/UserForm.css";

const UserForm = ({ addUser }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email) {
      addUser({ id: Date.now(), name, email });
      setName("");
      setEmail("");
    }
  };

  return (
    <form className="user-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button type="submit">Add User</button>
    </form>
  );
};

export default UserForm;