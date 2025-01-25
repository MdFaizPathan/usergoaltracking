/* GoalSummary.js code from the provided example */
// components/GoalSummary.js
import React from "react";
import "./styles/GoalSummary.css";

const GoalSummary = ({ users }) => {
  const totalGoals = users.reduce((sum, user) => sum + user.goals.length, 0);
  const completedGoals = users.reduce(
    (sum, user) =>
      sum + user.goals.filter((goal) => goal.status === "Completed").length,
    0
  );
  const completionRate = totalGoals
    ? ((completedGoals / totalGoals) * 100).toFixed(2)
    : 0;

  return (
    <div className="goal-summary">
      <h2>Goal Summary</h2>
      <p>Total Goals: {totalGoals}</p>
      <p>Completed Goals: {completedGoals}</p>
      <p>Completion Rate: {completionRate}%</p>
    </div>
  );
};

export default GoalSummary;
