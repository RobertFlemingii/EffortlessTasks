// TaskList.js

import React, { useState } from 'react';
import Task from './Task';
import '../styles/tasklist.css';

const TaskList = ({ tasks }) => {
  const [taskList, setTaskList] = useState(tasks);

  const handleDelete = (taskId) => {
    const updatedTaskList = taskList.filter(task => task.id !== taskId);
    setTaskList(updatedTaskList);
  };

  const handleAddTask = () => {
    const newTask = { id: Date.now(), title: '', dueDate: '', priority: '', isComplete: false };
    setTaskList([...taskList, newTask]);
  };

  return (
    <div className="task-list">
      {taskList.map(task => (
        <Task key={task.id} task={task} onDelete={handleDelete} />
      ))}
      <button className="add-task-button" onClick={handleAddTask}>Add Task</button>
    </div>
  );
}
TaskList.defaultProps = {
  tasks: [] // Default empty array if tasks prop is not provided
};
export default TaskList;
