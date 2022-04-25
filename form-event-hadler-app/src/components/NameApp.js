import React from "react";

const NameApp = () => {
  const [text, setText] = React.useState("");
  const [headingText, setHeadingText] = React.useState("");
  const [isMouseOver, setMouseOver] = React.useState(false);

  const handleClick = () => {
    setHeadingText(text);
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
      <input
        onChange={handleChange}
        type="text"
        placeholder="What's your name?"
      />
      <button
        style={{ backgroundColor: isMouseOver ? "black" : "white" }}
        onClick={handleClick}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        Submit
      </button>
    </div>
  );
};

export default NameApp;
