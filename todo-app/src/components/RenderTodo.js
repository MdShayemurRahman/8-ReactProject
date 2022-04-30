import React from "react";

const RenderTodo = (props) => {
  return (
    <div className="todo-data">
      <span>{props.todo.text}</span>
    </div>
  );
};

export default RenderTodo;
