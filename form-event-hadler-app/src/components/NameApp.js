import React from "react";

const NameApp = () => {
  const [text, setText] = React.useState("Hello..");
  const [isMouseOver, setMouseOver] = React.useState(false);

  const handleClick = (text) => {
    setText("submitted!");
  };
  const handleMouseOver = (isMouseOver) => {
    setMouseOver(true);
  };

  const handleMouseOut = (isMouseOver) => {
    setMouseOver(false);
  };


  return (
    <div className="container">
      <h1>{text}</h1>
      <input type="text" placeholder="What's your name?" />
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
