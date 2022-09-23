import React from "react";
import { directors } from "../data";

function Directors() {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map(director => {
        return (
          <div key={director.name}>
            <h2>Name: {director.name}</h2>
            <p>Movies:</p>
            {director.movies.map(movies => {
              return <li key={movies}>{movies}</li>
            })}
          </div>
        )
      })}
    </div>
    );
}

export default Directors;
