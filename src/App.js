/* App.js code from the provided example */
// App.js
import React, { useState } from "react";
import UserList from "./components/UserList";
import UserForm from "./components/UserForm";
import UserDetails from "./components/UserDetails";
import GoalSummary from "./components/GoalSummary";
import "./App.css";

const App = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  const addUser = (user) => {
    setUsers([...users, { ...user, goals: [] }]);
  };

  const selectUser = (user) => {
    setSelectedUser(user);
  };

  const closeUserDetails = () => {
    setSelectedUser(null);
  };

  const updateUserGoals = (userId, goals) => {
    setUsers(
      users.map((user) =>
        user.id === userId ? { ...user, goals: goals } : user
      )
    );
  };

  return (
    <div className="app">
      <header>
        <h1>User Goal Tracking Dashboard</h1>
      </header>
      <main>
        <GoalSummary users={users} />
        <UserForm addUser={addUser} />
        <UserList users={users} selectUser={selectUser} />
        {selectedUser && (
          <UserDetails
            user={selectedUser}
            closeUserDetails={closeUserDetails}
            updateUserGoals={updateUserGoals}
          />
        )}
      </main>
    </div>
  );
};

export default App;