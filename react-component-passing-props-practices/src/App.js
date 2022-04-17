import React from "react";
import Card from "./components/Card";
import contacts from "./contact";

const App = () => {
  return (
    <div>
      <h1 className="heading">My Contact</h1>
      <div className="card">
        <Card
          name={contacts[0].name}
          image={contacts[0].image}
          tel={contacts[0].tel}
          email={contacts[0].email}
        />

        <Card
          name={contacts[1].name}
          image={contacts[1].image}
          tel={contacts[1].tel}
          email={contacts[1].email}
        />

        <Card
          name={contacts[2].name}
          image={contacts[2].image}
          tel={contacts[2].tel}
          email={contacts[2].email}
        />
      </div>
    </div>
  );
};

export default App;
