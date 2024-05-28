import React, { useState } from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';

const AddTask = ({ addTask }) => {
  const [taskTitle, setTaskTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskTitle.trim()) {
      addTask(taskTitle);
      setTaskTitle('');
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="mb-4">
      <Row >
        <Col xs={12} md={8}>
          <Form.Control 
            type="text"
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            placeholder="Add a new task"
          />
        </Col>
        <Col xs={12} md={4}>
          <Button variant="success" type="submit" block>
            Add Task
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default AddTask;
