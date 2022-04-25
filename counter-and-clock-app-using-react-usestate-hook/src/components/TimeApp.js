import React from "react";

const TimeApp = () => {
  const now = new Date().toLocaleTimeString();
  const [time, setTime] = React.useState(now);

  const getTime = (time) => {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  };

  setTimeout(getTime, 1000);

  return (
    <div className="time-app">
      <h1>{time}</h1>
      <button onClick={getTime}>Get Time</button>
    </div>
  );
};

export default TimeApp;
