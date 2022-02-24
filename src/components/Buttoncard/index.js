import React from "react";
import "./index.scss";

const Buttoncard = (props) => {
  console.log(props);
  function sendValue(event) {
    const nam = event.target.id;
    console.log(nam);
    props.onClick(nam);
  }
  return (
    <div id="fullcard">
      <h2 className="heading">Chuck Norris</h2>
      <div className="button-card">
        {props.data.map((value, index) => (
          <button onClick={sendValue} id={index}>
            {value}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Buttoncard;
