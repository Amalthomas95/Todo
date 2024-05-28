
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';
import TaskList from './Components/Tasklist';
import AddTask from './Components/Addtask';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (title) => {
    const newTask = { id: Date.now(), title, completed: false };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleTaskCompletion = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  return (
    <Container style={{ boxShadow: '5px 10px 15px black',background: 'linear-gradient(to bottom, #ff99ff 0%, #6666ff 100%)',marginTop:'50px',borderRadius:'20px',padding:'50px'}} className="my-5">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <h2 style={{color:'white'}} className="text-center">To-Do List</h2>
          <div style={{marginTop:'30px'}}>
          <AddTask addTask={addTask} />
          </div>
         <div style={{marginTop:'30px'}}>
          <TaskList tasks={tasks} deleteTask={deleteTask} toggleTaskCompletion={toggleTaskCompletion} />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
