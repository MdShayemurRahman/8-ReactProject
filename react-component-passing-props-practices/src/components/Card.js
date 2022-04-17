import React from "react";
import Avatar from "./Avatar";

const Card = (props) => {
  return (
    <section>
      <div className="card-content">
        <Avatar img={props.image} />
        <h2>{props.name}</h2>
        <p>Phone no: {props.tel}</p>
        <p>Email: {props.email}</p>
      </div>
    </section>
  );
};

export default Card;
