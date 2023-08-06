import React, { useState } from 'react';
import TaskList from './TaskList';
import '../styles/dashboard.css';

const Dashboard = () => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [dashboardTitle, setDashboardTitle] = useState('Your Dashboard'); // Default dashboard title

  const toggleEditMode = () => {
    setIsEditMode(!isEditMode);
  };

  const handleSave = () => {
    // Save the edited dashboard title to a database or perform other actions
    setIsEditMode(false);
  };

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        {isEditMode ? (
          <input
            type="text"
            className="input-dashboard-title"
            value={dashboardTitle}
            onChange={(e) => setDashboardTitle(e.target.value)}
            onBlur={handleSave}
            autoFocus
          />
        ) : (
          <h2 onClick={toggleEditMode}>{dashboardTitle}</h2>
        )}
      </div>
      <TaskList /> {/* Add the TaskList component */}
    </div>
  );
}

export default Dashboard;
