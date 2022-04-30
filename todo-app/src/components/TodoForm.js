import React from "react";
import { Button, Form } from "react-bootstrap";

const TodoForm = (props) => {
  const [value, setValue] = React.useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setValue(value);
    props.addTodo(value);
    setValue("");
  };

  return (
    <Form onSubmit={handleSubmit} className="">
      <input
        type="text"
        name=""
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="form-input"
        required
      />
      <Button type="submit"> + </Button>
    </Form>
  );
};

export default TodoForm;
