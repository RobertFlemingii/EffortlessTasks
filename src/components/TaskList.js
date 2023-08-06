import React from 'react';
import Task from './Task'; // Import the Task component

const TaskList = () => {
  const tasks = [
    { id: 1, title: 'Complete Project Proposal', dueDate: 'August 15', priority: 'High Priority', isComplete: false },
    { id: 2, title: 'Review Code Pull Request', dueDate: 'August 18', priority: 'Medium Priority', isComplete: false },
    // Add more tasks as needed
  ];

  return (
    <div className="task-list">
      {tasks.map(task => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;
