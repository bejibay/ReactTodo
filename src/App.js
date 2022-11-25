import React, {useState} from "react";
import "./App.css";

export default function App() {
  const [todos, setTodos] =useState([
    {
      data: "Build To Do App With React",
      isCompleted: false
    },
    {
      data: "Build LMS With Laravel",
      isCompleted: false
    },
    {
      data: "Build Shopping Cart with React Redux",
      isCompleted: false
    }
  ]);

  const addAction = data => {
    const newTodos = [...todos, { data }];
    setTodos(newTodos);
  };

  const completeAction = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeAction = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="action-list">
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} completeAction={completeAction} removeAction={removeAction} />
        ))}
        <AddTodoForm addAction={addAction} />
      </div>
    </div>
  );
}




function Todo({ todo, index, completeAction, removeAction }) {
  return (
    <div
      className="todo"
      style={{ backgroundColor: todo.isCompleted ? "lightblue" : "" }}
    >
      {todo.data}
      <div>
        <button onClick={() => completeAction(index)}>Complete</button>
        <button onClick={() => removeAction(index)}>x</button>
      </div>
    </div>
  );
}

function AddTodoForm({ addAction }) {
  const [value, setValue] =useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addAction(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" className="input" value={value} onChange={e => setValue(e.target.value)}/>
      <input type ="submit" value ="Add New Todo"/>
    </form>
  );
}

