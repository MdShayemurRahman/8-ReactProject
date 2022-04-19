import React from "react";
import Avatar from "./Avatar";
import Details from "./Details";

const Card = (props) => {
  return (
    <section>
      <div className="card-content">
        <p>{props.id}</p>
        <Avatar img={props.image} />
        <h2>{props.name}</h2>
        <Details detailsInfo={props.tel} />
        <Details detailsInfo={props.email} />
      </div>
    </section>
  );
};

export default Card;
