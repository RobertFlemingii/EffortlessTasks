import React from 'react';

const TaskDetails = ({ task }) => {
  return (
    <div className="task-details">

      <div className="task-info">

        <p>Due: {task.dueDate}</p>
        <span className="priority">{task.priority}</span>
      </div>
      <div className="description">
        <h4>Description:</h4>
        <p>{task.description}</p>
      </div>
      <div className="status">
        <h4>Status:</h4>
        <p>{task.isComplete ? 'Completed' : 'Pending'}</p>
      </div>
    </div>
  );
}

export default TaskDetails;
