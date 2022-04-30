import React from "react";
import "font-awesome/css/font-awesome.min.css";


const TodoForm = (props) => {
  const [value, setValue] = React.useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setValue(value);
    props.addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        name="todo-task"
        value={value}
        placeholder=" Input Your Todo.."
        onChange={(e) => setValue(e.target.value)}
        className="form-input"
        required
      />
      <button type="submit">
        {" "}
        <i className="fa fa-plus"></i>{" "}
      </button>
    </form>
  );
};

export default TodoForm;
