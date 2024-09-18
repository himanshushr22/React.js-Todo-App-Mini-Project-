import React, { useState } from "react";
import './Todo.css';

const Todo = () => {
  const [input, setInput] = useState("");
  const [Todos, setTodos] = useState([]);


  const addTodo = () => {
    if (!input) {
      alert("Please Add Something!");
    }
    const newTodo = {
      id: Todos.length + 1,
      text: input,
    };
    setTodos([...Todos, newTodo]);
    setInput("");
  };

  const deleteTodo = (id) => {
    setTodos(Todos.filter((todo) => todo.id !== id));
  };



  return (
    <div className="box">
    <div className="main">
      <h1>Todo App</h1>
      <input 
      className="input"
        type="text"
        placeholder="Type Here"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      
   


      <button className="AddButton" onClick={addTodo}>Add</button>
     
        <ul className="lists">
          {Todos.map((todo) => (
            <li className="list" key={todo.id}>
              {todo.text}
              
              <button className="delete" onClick={() => deleteTodo(todo.id)}>Delete</button>
            </li>
          ))}
        </ul>
      
    </div>
    </div>
  );
};

export default Todo;
