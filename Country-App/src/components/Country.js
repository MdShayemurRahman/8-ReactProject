import React from "react";

const Country = ({ country, onHandleRemove }) => {
  const { capital, flags, population, area, name } = country;

  const handleRemove = (name) => {
    onHandleRemove(name);
  };
  return (
    <article className="country">
      <img src={flags.png} alt={name.common} />
      <h4>{name.common}</h4>
      <p>Capital: {capital}</p>
      <p>Population: {population}</p>
      <p>Area: {area}</p>
      <button
        onClick={() => {
          handleRemove(name.common);
        }}
      >
        Remove
      </button>
    </article>
  );
};

export default Country;
