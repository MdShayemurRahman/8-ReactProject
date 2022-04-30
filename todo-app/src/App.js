import React from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";

import TodoForm from "./components/TodoForm";
import RenderTodo from "./components/RenderTodo";

function App() {
  const [todos, setTodos] = React.useState([
    {
      text: "",
      isDone: false,
    },
  ]);

  const addTodo = (text) => {
    const newTodo = [...todos, { text }];
    setTodos(newTodo);
    console.log(newTodo);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <TodoForm addTodo={addTodo} />
      <div className="container">
        {todos.map((todo) => {
          return <RenderTodo key={uuidv4()} todo={todo} />;
        })}
      </div>
    </div>
  );
}

export default App;
