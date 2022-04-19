import React from "react";
import Card from "./components/Card";
import contacts from "./contact";


const App = () => {
  return (
    <div>
      <h1 className="heading">My Contact</h1>
      <div className="card">
        {contacts.map((contact) => {
          return (
            <Card
              key={contact.id}
              id={contact.id}
              name={contact.name}
              image={contact.image}
              tel={contact.tel}
              email={contact.email}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
