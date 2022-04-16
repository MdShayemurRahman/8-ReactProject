import React from "react";
import Country from "./Country";

const Countries = ({ countries, onHandleRemove }) => {
  return (
    <section className="countries">
      {countries.map((country, index) => {
        return <Country country={country} key={index}  onHandleRemove={onHandleRemove}/>;
      })}
    </section>
  );
};

export default Countries;
