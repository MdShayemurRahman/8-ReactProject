import React from "react";

const RenderTodo = (props) => {
  return (
    <div className="row">
      <span>{props.todo.text}</span>
    </div>
  );
};

export default RenderTodo;
