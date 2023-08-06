import React, { useState } from 'react';
import TaskDetails from './TaskDetails';

const Task = ({ task }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className={`task ${task.isComplete ? 'completed' : ''}`} onClick={toggleDetails}>
      <h3>{task.title}</h3>

      {showDetails && <TaskDetails task={task} />} {/* Render TaskDetails when showDetails is true */}
    </div>
  );
}

export default Task;
