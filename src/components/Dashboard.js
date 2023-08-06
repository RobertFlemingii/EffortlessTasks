import React from 'react';
import TaskList from './TaskList'; // Import the TaskList component

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h2>Your Tasks</h2>
      <TaskList /> {/* Render the TaskList component */}
    </div>
  );
}

export default Dashboard;
