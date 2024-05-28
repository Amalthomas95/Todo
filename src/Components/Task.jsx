import React from 'react';
import { Button, Form } from 'react-bootstrap';

const Task = ({ task, deleteTask, toggleTaskCompletion }) => {
  return (
    <div 
      className={`task ${task.completed ? 'completed' : ''}`} 
      style={{ backgroundColor:'white', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px', border: '1px solid #ccc', marginBottom: '10px' }}
    >
      <Form.Check
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTaskCompletion(task.id)}
        className="mr-2"
        style={{ marginRight: '10px' }}
      />
      <span 
        className="flex-grow-1 task-label" 
        style={{ marginRight: '20px', flexGrow: 1 }}
      >
        {task.title}
      </span>
      <Button 
        variant="danger" 
        onClick={() => deleteTask(task.id)}
        style={{ marginLeft: 'auto' }}
      >
        Delete
      </Button>
    </div>
  );
};

export default Task;
