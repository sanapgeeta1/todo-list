import React, { useState, useEffect} from 'react';
import {FaCheck, FaPlusCircle, FaTrash} from 'react-icons/fa';
import {Button, Row, Col, Container} from 'react-bootstrap';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

function ToDoList(){
  const [todos, setTodos] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [input , setInput] = useState('');
  const addTodo = () => {
    const todo = {
      id: Math.floor(Math.random() * 1000),
      text: input
    }
    setTodos([todo, ...todos]);
  }

  const deleteTodo = (id) => {
    const filterarray = todos.filter(x => x.id !== id);
    setTodos(filterarray);
  }

  const addtoCompleted = (id) => {
    const item = todos.find(x => x.id === id);
    setCompleted([item, ...completed]);
    const filterarray = todos.filter(x => x.id !== id);
    setTodos(filterarray);
  }
  useEffect(() => {

  }, [todos, completed])

    return (
       <Container>
        <Row className='todo_list'>
        <h3 className="todo_title">To Do List App</h3>
        </Row>
       <Row> 
       <form  className='form-todo'>
       <Col xs lg="2"></Col>
       <Col xs lg="10">
       <input type="text" className="form-control" onChange={(e) => setInput(e.target.value)} placeholder="Enter Your Todo" name="text"/>
       <Button  variant="primary mt-2 px-2" disabled={!input} onClick={() => addTodo()}><FaPlusCircle className="icon"/>{ ' '}Add</Button>
          </Col>
        </form>
       </Row>
       <Row className='pt-5'>
        <Col xs lg="6">
           <p className="todo_title"><b>To Do List</b></p>
           {todos.map((item, index) => 
            <div className="todo_card " key={item.id}>
               <FaCheck onClick={() => addtoCompleted(item.id)} className="icon-check-todo "/>
               <FaTrash onClick={() => deleteTodo(item.id)} className="icon-trash-todo"/>
               <span className="card_text p-3 ">{item.text}</span>
            </div>
           )}  
        </Col>
        <Col  xs lg="6">
            <div className="todo_list">
           <p className="todo_title"><b>Completed</b></p>
           {completed.map((item, index) => 
            <div className="completed_card" key={item.id}>
             <span className="card_text p-3 line-through"> {item.text}</span>
            </div>
           )}
       </div>
        </Col>
       </Row>
       
   </Container>
    )
  }

export default ToDoList;
