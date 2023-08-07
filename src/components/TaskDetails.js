import React, { useState } from 'react';
import TaskDetails from './TaskDetails';

const Task = ({ task, onDelete }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`task ${task.isComplete ? 'completed' : ''}`} onClick={toggleExpand}>
      <h3>{task.title}</h3>
      {isExpanded && (
        <>
          <TaskDetails task={task} onDelete={onDelete} />
          <span className={`priority ${task.priority}`}>{task.priority}</span>
        </>
      )}
    </div>
  );
};

export default Task;
