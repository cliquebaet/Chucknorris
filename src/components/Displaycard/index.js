import React from "react";
import "./index.scss";

const Displaycard = (props) => {
  console.log(props.data);
  function newJoke(){
    props.joke();
  }

  return (
    <div id="display-card">
      {/* <span className="category">Selected Category : ${props.category}</span> */}
      <div className="display-content">{props.data}</div>
      <button className="new-joke" onClick={newJoke}>New Joke</button>
    </div>
  );
};

export default Displaycard;
