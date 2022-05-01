import React from "react";
import "./App.css";

function App() {
  const [toggle, setToggle] = React.useState(true);
  return (
    <div className="App">
      <h1 className="App-header">FAQ Application</h1>
      <div className="App-container">
        {toggle && (
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae
            tenetur quaerat deserunt. Quasi perferendis nulla, cum consequuntur
            repellendus sequi distinctio.
          </p>
        )}
        <button
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          {toggle ? "Hide" : "Show"}
        </button>
      </div>
    </div>
  );
}

export default App;
