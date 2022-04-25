import React from "react";

const NameApp = () => {
  const [text, setText] = React.useState("");
  const [headingText, setHeadingText] = React.useState("");
  const [isMouseOver, setMouseOver] = React.useState(false);

  const handleClick = (event) => {
    setHeadingText(text);

    event.preventDefault();
  };
  const handleMouseOver = (isMouseOver) => {
    setMouseOver(true);
  };

  const handleMouseOut = (isMouseOver) => {
    setMouseOver(false);
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="container">
      <h1>Hello, {headingText}</h1>
      <form onSubmit={handleClick}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
        />
        <button
          type="submit"
          style={{ backgroundColor: isMouseOver ? "black" : "white" }}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default NameApp;
