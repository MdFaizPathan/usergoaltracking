/* UserDetails.js code from the provided example */
// components/UserDetails.js
import React, { useState } from "react";
import "./styles/UserDetails.css";

const UserDetails = ({ user, closeUserDetails, updateUserGoals }) => {
  const [goals, setGoals] = useState(user.goals);
  const [goalTitle, setGoalTitle] = useState("");
  const [goalDeadline, setGoalDeadline] = useState("");
  const [goalStatus, setGoalStatus] = useState("In Progress");

  const addGoal = () => {
    const newGoal = { title: goalTitle, deadline: goalDeadline, status: goalStatus };
    const updatedGoals = [...goals, newGoal];
    setGoals(updatedGoals);
    updateUserGoals(user.id, updatedGoals);
    setGoalTitle("");
    setGoalDeadline("");
  };

  return (
    <div className="user-details">
      <button onClick={closeUserDetails}>Close</button>
      <h2>{user.name}'s Goals</h2>
      <ul>
        {goals.map((goal, index) => (
          <li key={index}>
            <span>{goal.title}</span>
            <span>{goal.deadline}</span>
            <span>{goal.status}</span>
          </li>
        ))}
      </ul>
      <div className="goal-form">
        <input
          type="text"
          placeholder="Goal Title"
          value={goalTitle}
          onChange={(e) => setGoalTitle(e.target.value)}
        />
        <input
          type="date"
          value={goalDeadline}
          onChange={(e) => setGoalDeadline(e.target.value)}
        />
        <select
          value={goalStatus}
          onChange={(e) => setGoalStatus(e.target.value)}
        >
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
        <button onClick={addGoal}>Add Goal</button>
      </div>
    </div>
  );
};

export default UserDetails;