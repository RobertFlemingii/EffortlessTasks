import React, { useState } from 'react';
import TaskDetails from './TaskDetails';

const Task = ({ task, onDelete }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const closeTask = (e) => {
    e.stopPropagation();
    setIsExpanded(false);
  };

  return (
    <div className={`task ${task.isComplete ? 'completed' : ''}`} onClick={toggleExpand}>
      <div className="task-header">
        <h3>{task.title}</h3>
        <button className={`expand-button ${isExpanded ? 'expanded' : ''}`} onClick={toggleExpand}>
          &#9658;
        </button>
        <button className="delete-button" onClick={() => onDelete(task.id)}>
          Delete
        </button>
      </div>
      {isExpanded && (
        <>
          <p>Due: {task.dueDate}</p>
          <TaskDetails task={task} onDelete={onDelete} />
          <span className={`priority ${task.priority}`}>{task.priority}</span>
        </>
      )}
    </div>
  );
};

export default Task;
