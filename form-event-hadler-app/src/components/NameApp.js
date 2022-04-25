import React from "react";

const NameApp = () => {
  const [fName, setFName] = React.useState("");
  const [lName, setLName] = React.useState("");

  const [isMouseOver, setMouseOver] = React.useState(false);

  const handleClick = (event) => {
    event.preventDefault();
  };
  const handleMouseOver = (isMouseOver) => {
    setMouseOver(true);
  };

  const handleMouseOut = (isMouseOver) => {
    setMouseOver(false);
  };

  const handleFNameChange = (event) => {
    setFName(event.target.value);
  };

  const handleLNameChange = (event) => {
    setLName(event.target.value);
  };

  return (
    <div className="container">
      <h1>
        Hello, {fName} {lName}
      </h1>
      <form onSubmit={handleClick}>
        <input
          name="fName"
          onChange={handleFNameChange}
          placeholder="first name"
          value={fName}
        />
        <input
          name="lName"
          onChange={handleLNameChange}
          placeholder="last name"
          value={lName}
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
