import React, { useState } from "react";

/**
 * Use Hook for state
 */
const FunctionComponent = props => {
  const [state, setState] = useState({ name: "hieu" });

  // function onClick() {
  //   setState("nes");
  // }

  const onClick = () => {
    setState({ name: "nes" });
  };
  return (
    <div>
      This is Function component
      <p>This is color {props.color}</p>
      <p onClick={onClick}>This is {state.name}</p>
    </div>
  );
};

export default FunctionComponent;
